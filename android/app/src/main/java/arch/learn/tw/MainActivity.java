package arch.learn.tw;

import android.app.ActivityManager;
import android.annotation.SuppressLint;
import android.content.ComponentCallbacks2;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.net.http.SslError;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.CookieManager;
import android.webkit.RenderProcessGoneDetail;
import android.webkit.SslErrorHandler;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import androidx.activity.OnBackPressedCallback;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.splashscreen.SplashScreen;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.annotation.RequiresApi;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    private enum WebViewAbsenceReason {
        NONE,
        BACKGROUND_MEMORY,
        RENDERER_RECLAIMED,
        RENDERER_CRASHED,
        PROVIDER_FAILURE,
        ACTIVITY_DESTROYED
    }

    public static final String TARGET_URL = TrustedUrlPolicy.HOME_URL;

    private static final String STATE_TRUSTED_URL = "arch.trusted_url";
    private static final int MAX_SELECTED_FILES = 10;
    private static final long RENDERER_RETRY_DELAY_MS = 600L;

    private final Handler mainHandler = new Handler(Looper.getMainLooper());

    private FrameLayout webViewContainer;
    private WebView webView;
    private SwipeRefreshLayout swipeRefreshLayout;
    private ProgressBar progressBar;
    private View offlineContainer;
    private TextView offlineTitle;
    private TextView offlineMessage;
    private Button btnRetry;

    private ValueCallback<Uri[]> filePathCallback;
    private ActivityResultLauncher<Intent> fileChooserLauncher;
    private Runnable pendingRendererRecovery;

    private String lastTrustedUrl = TARGET_URL;
    private boolean lowRamDevice;
    private boolean activityResumed;
    private boolean pageLoadFailed;
    private int automaticRendererRecoveries;
    private WebViewAbsenceReason webViewAbsenceReason = WebViewAbsenceReason.NONE;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.installSplashScreen(this);
        super.onCreate(savedInstanceState);

        WindowCompat.setDecorFitsSystemWindows(getWindow(), false);
        setContentView(R.layout.activity_main);

        lowRamDevice = isLowRamDevice();
        initViews();
        applyEdgeToEdgeInsets();
        setupFileChooserLauncher();
        setupSwipeRefresh();
        setupBackNavigation();

        String deepLink = trustedUrlFromIntent(getIntent());
        String savedUrl = savedInstanceState == null
                ? null
                : TrustedUrlPolicy.trustedOrNull(savedInstanceState.getString(STATE_TRUSTED_URL));
        lastTrustedUrl = deepLink != null ? deepLink : (savedUrl != null ? savedUrl : TARGET_URL);

        if (createWebView()) {
            loadTrustedUrl(lastTrustedUrl);
        }
    }

    private void initViews() {
        webViewContainer = findViewById(R.id.webViewContainer);
        swipeRefreshLayout = findViewById(R.id.swipeRefreshLayout);
        progressBar = findViewById(R.id.progressBar);
        offlineContainer = findViewById(R.id.offlineContainer);
        offlineTitle = findViewById(R.id.offlineTitle);
        offlineMessage = findViewById(R.id.offlineMessage);
        btnRetry = findViewById(R.id.btnRetry);

        btnRetry.setOnClickListener(v -> retryLastPage());
    }

    private void applyEdgeToEdgeInsets() {
        View root = findViewById(android.R.id.content);
        ViewCompat.setOnApplyWindowInsetsListener(root, (view, windowInsets) -> {
            Insets systemBars = windowInsets.getInsets(
                    WindowInsetsCompat.Type.systemBars() | WindowInsetsCompat.Type.displayCutout());
            Insets ime = windowInsets.getInsets(WindowInsetsCompat.Type.ime());
            view.setPadding(
                    systemBars.left,
                    systemBars.top,
                    systemBars.right,
                    Build.VERSION.SDK_INT >= Build.VERSION_CODES.R
                            ? Math.max(systemBars.bottom, ime.bottom)
                            : systemBars.bottom);
            return windowInsets;
        });
        ViewCompat.requestApplyInsets(root);
    }

    private void setupFileChooserLauncher() {
        fileChooserLauncher = registerForActivityResult(
                new ActivityResultContracts.StartActivityForResult(),
                result -> {
                    ValueCallback<Uri[]> callback = filePathCallback;
                    filePathCallback = null;
                    if (callback == null) {
                        return;
                    }

                    Uri[] parsed;
                    try {
                        parsed = WebChromeClient.FileChooserParams.parseResult(
                                result.getResultCode(), result.getData());
                    } catch (RuntimeException error) {
                        parsed = null;
                    }
                    Uri[] safeResults = filterSafeContentUris(parsed);
                    try {
                        callback.onReceiveValue(safeResults);
                    } catch (RuntimeException ignored) {
                        // The renderer may have gone away while the system picker was open.
                    }
                });
    }

    private Uri[] filterSafeContentUris(Uri[] candidates) {
        if (candidates == null || candidates.length == 0) {
            return null;
        }

        List<Uri> safeUris = new ArrayList<>();
        for (Uri candidate : candidates) {
            if (safeUris.size() >= MAX_SELECTED_FILES) {
                break;
            }
            if (candidate == null) {
                continue;
            }
            try {
                Uri normalized = candidate.normalizeScheme();
                if (!"content".equals(normalized.getScheme())) {
                    continue;
                }
                String authority = normalized.getAuthority();
                if (authority == null || authority.equals(getPackageName())) {
                    continue;
                }
                safeUris.add(normalized);
            } catch (RuntimeException ignored) {
                // Treat picker results as untrusted input and skip malformed values.
            }
        }

        if (safeUris.isEmpty()) {
            Toast.makeText(this, R.string.file_selection_rejected, Toast.LENGTH_SHORT).show();
            return null;
        }
        return safeUris.toArray(new Uri[0]);
    }

    private boolean createWebView() {
        if (webView != null) {
            return true;
        }

        WebView candidate = null;
        try {
            candidate = new WebView(this);
            candidate.setLayoutParams(new FrameLayout.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT));
            configureWebView(candidate);
            webView = candidate;
            webViewContainer.addView(candidate);
            webViewAbsenceReason = WebViewAbsenceReason.NONE;
            return true;
        } catch (RuntimeException error) {
            webView = null;
            webViewAbsenceReason = WebViewAbsenceReason.PROVIDER_FAILURE;
            detachAndDestroyWebView(candidate);
            showRecoveryView(
                    R.string.webview_unavailable_title,
                    R.string.webview_unavailable_message,
                    R.string.retry_button);
            return false;
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    private void configureWebView(WebView candidate) {
        WebSettings settings = candidate.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(true);
        settings.setBuiltInZoomControls(true);
        settings.setDisplayZoomControls(false);
        settings.setSupportZoom(true);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(true);
        settings.setMediaPlaybackRequiresUserGesture(true);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        settings.setSupportMultipleWindows(false);
        settings.setJavaScriptCanOpenWindowsAutomatically(false);
        settings.setOffscreenPreRaster(false);

        String userAgent = settings.getUserAgentString() + " ArchAndroid/1.1";
        if (lowRamDevice) {
            userAgent += " ArchLite/1";
        }
        settings.setUserAgentString(userAgent);

        CookieManager cookieManager = CookieManager.getInstance();
        cookieManager.setAcceptCookie(true);
        cookieManager.setAcceptThirdPartyCookies(candidate, false);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            candidate.setRendererPriorityPolicy(WebView.RENDERER_PRIORITY_BOUND, true);
        }

        candidate.setWebViewClient(createWebViewClient());
        candidate.setWebChromeClient(createWebChromeClient());
        candidate.setDownloadListener((url, userAgentValue, contentDisposition, mimeType, contentLength) -> {
            Uri uri = parseHttpUri(url);
            if (uri == null || !openExternalUri(uri)) {
                Toast.makeText(this, R.string.download_unavailable, Toast.LENGTH_SHORT).show();
            }
        });
    }

    private WebViewClient createWebViewClient() {
        return new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                String url = request.getUrl().toString();
                if (TrustedUrlPolicy.isTrusted(url)) {
                    return false;
                }

                if (!request.isForMainFrame() || !request.hasGesture()) {
                    return true;
                }

                Uri uri = request.getUrl().normalizeScheme();
                String scheme = uri.getScheme();
                if ("https".equals(scheme) || "http".equals(scheme)
                        || "tel".equals(scheme) || "mailto".equals(scheme) || "sms".equals(scheme)) {
                    if (!openExternalUri(uri)) {
                        Toast.makeText(MainActivity.this, R.string.external_app_unavailable, Toast.LENGTH_SHORT).show();
                    }
                } else {
                    Toast.makeText(MainActivity.this, R.string.blocked_link, Toast.LENGTH_SHORT).show();
                }
                return true;
            }

            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                if (view != webView) {
                    return;
                }
                super.onPageStarted(view, url, favicon);
                pageLoadFailed = false;
                String trusted = TrustedUrlPolicy.trustedOrNull(url);
                if (trusted != null) {
                    lastTrustedUrl = trusted;
                }
                hideRecoveryView();
                progressBar.setProgress(5);
                progressBar.setVisibility(View.VISIBLE);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                if (view != webView) {
                    return;
                }
                super.onPageFinished(view, url);
                progressBar.setVisibility(View.GONE);
                swipeRefreshLayout.setRefreshing(false);
                if (!pageLoadFailed) {
                    view.setVisibility(View.VISIBLE);
                    hideRecoveryView();
                }
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                super.onReceivedError(view, request, error);
                if (view == webView && request.isForMainFrame() && !pageLoadFailed) {
                    showPageError(R.string.offline_title, R.string.offline_message);
                }
            }

            @Override
            public void onReceivedHttpError(
                    WebView view,
                    WebResourceRequest request,
                    WebResourceResponse errorResponse) {
                super.onReceivedHttpError(view, request, errorResponse);
                if (view == webView && request.isForMainFrame() && !pageLoadFailed
                        && errorResponse.getStatusCode() >= 400) {
                    showPageError(R.string.server_error_title, R.string.server_error_message);
                }
            }

            @Override
            public void onReceivedSslError(WebView view, SslErrorHandler handler, SslError error) {
                handler.cancel();
                String failingUrl = error == null ? null : error.getUrl();
                boolean mainFrameFailure = failingUrl != null
                        && (failingUrl.equals(view.getUrl())
                        || failingUrl.equals(view.getOriginalUrl())
                        || failingUrl.equals(lastTrustedUrl));
                if (view == webView && mainFrameFailure && !pageLoadFailed) {
                    showPageError(R.string.ssl_error_title, R.string.ssl_error_message);
                }
            }

            @Override
            @RequiresApi(Build.VERSION_CODES.O)
            public boolean onRenderProcessGone(WebView view, RenderProcessGoneDetail detail) {
                if (view != webView) {
                    // A renderer callback can arrive after a replacement is already active.
                    // Only clean the stale instance; never hide or reset the current page.
                    detachAndDestroyWebView(view);
                    return true;
                }

                boolean rendererCrashed = detail.didCrash();
                String candidateUrl = TrustedUrlPolicy.trustedOrNull(view.getUrl());
                if (candidateUrl != null) {
                    lastTrustedUrl = candidateUrl;
                }
                if (rendererCrashed) {
                    // Do not reload the same renderer-crashing page; recover from the known-safe home.
                    lastTrustedUrl = TARGET_URL;
                }

                if (view == webView) {
                    webView = null;
                }
                webViewAbsenceReason = rendererCrashed
                        ? WebViewAbsenceReason.RENDERER_CRASHED
                        : WebViewAbsenceReason.RENDERER_RECLAIMED;
                cancelFileChooser();
                detachAndDestroyWebView(view);
                showRecoveryView(
                        rendererCrashed ? R.string.renderer_crashed_title : R.string.renderer_reclaimed_title,
                        rendererCrashed ? R.string.renderer_crashed_message : R.string.renderer_reclaimed_message,
                        R.string.retry_button);

                if (!rendererCrashed) {
                    scheduleLimitedRendererRecovery();
                }
                return true;
            }
        };
    }

    private WebChromeClient createWebChromeClient() {
        return new WebChromeClient() {
            @Override
            public void onProgressChanged(WebView view, int newProgress) {
                if (view != webView || pageLoadFailed) {
                    return;
                }
                progressBar.setProgress(newProgress);
                progressBar.setVisibility(newProgress < 100 ? View.VISIBLE : View.GONE);
            }

            @Override
            public boolean onShowFileChooser(
                    WebView sourceWebView,
                    ValueCallback<Uri[]> callback,
                    FileChooserParams fileChooserParams) {
                if (sourceWebView != webView) {
                    try {
                        callback.onReceiveValue(null);
                    } catch (RuntimeException ignored) {
                        // A stale renderer callback may already be invalid.
                    }
                    return true;
                }
                cancelFileChooser();
                filePathCallback = callback;
                try {
                    Intent intent = fileChooserParams.createIntent();
                    fileChooserLauncher.launch(intent);
                    return true;
                } catch (RuntimeException error) {
                    cancelFileChooser();
                    Toast.makeText(MainActivity.this, R.string.file_chooser_unavailable, Toast.LENGTH_SHORT).show();
                    return true;
                }
            }
        };
    }

    private void setupSwipeRefresh() {
        swipeRefreshLayout.setColorSchemeResources(R.color.primary, R.color.accent);
        swipeRefreshLayout.setOnChildScrollUpCallback((parent, child) ->
                webView != null && webView.getScrollY() > 0);
        swipeRefreshLayout.setOnRefreshListener(() -> {
            if (webView == null) {
                swipeRefreshLayout.setRefreshing(false);
                retryLastPage();
            } else {
                pageLoadFailed = false;
                webView.reload();
            }
        });
    }

    private void setupBackNavigation() {
        getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
            @Override
            public void handleOnBackPressed() {
                WebView current = webView;
                if (current != null && current.canGoBack()) {
                    current.goBack();
                } else {
                    finish();
                }
            }
        });
    }

    private void retryLastPage() {
        cancelPendingRendererRecovery();
        if (webView == null && !createWebView()) {
            return;
        }
        loadTrustedUrl(lastTrustedUrl);
    }

    private void loadTrustedUrl(String requestedUrl) {
        String trustedUrl = TrustedUrlPolicy.trustedOrHome(requestedUrl);
        lastTrustedUrl = trustedUrl;
        pageLoadFailed = false;
        hideRecoveryView();
        if (webView != null) {
            webView.setVisibility(View.VISIBLE);
            webView.loadUrl(trustedUrl);
        }
    }

    private void scheduleLimitedRendererRecovery() {
        int allowedRecoveries = lowRamDevice ? 1 : 2;
        if (!activityResumed || automaticRendererRecoveries >= allowedRecoveries) {
            return;
        }
        automaticRendererRecoveries++;
        cancelPendingRendererRecovery();
        pendingRendererRecovery = () -> {
            pendingRendererRecovery = null;
            if (activityResumed && !isFinishing() && !isDestroyed() && webView == null
                    && createWebView()) {
                loadTrustedUrl(lastTrustedUrl);
            }
        };
        mainHandler.postDelayed(pendingRendererRecovery, RENDERER_RETRY_DELAY_MS);
    }

    private void showPageError(int titleRes, int messageRes) {
        pageLoadFailed = true;
        showRecoveryView(titleRes, messageRes, R.string.retry_button);
    }

    private void showRecoveryView(int titleRes, int messageRes, int buttonRes) {
        if (webView != null) {
            webView.setVisibility(View.GONE);
        }
        offlineTitle.setText(titleRes);
        offlineMessage.setText(messageRes);
        btnRetry.setText(buttonRes);
        offlineContainer.setVisibility(View.VISIBLE);
        swipeRefreshLayout.setRefreshing(false);
        progressBar.setVisibility(View.GONE);
    }

    private void hideRecoveryView() {
        offlineContainer.setVisibility(View.GONE);
    }

    private boolean openExternalUri(Uri uri) {
        try {
            Intent intent = new Intent(Intent.ACTION_VIEW, uri);
            startActivity(intent);
            return true;
        } catch (RuntimeException error) {
            return false;
        }
    }

    private Uri parseHttpUri(String value) {
        if (value == null) {
            return null;
        }
        try {
            Uri uri = Uri.parse(value).normalizeScheme();
            return "https".equals(uri.getScheme()) || "http".equals(uri.getScheme()) ? uri : null;
        } catch (RuntimeException error) {
            return null;
        }
    }

    private String trustedUrlFromIntent(Intent intent) {
        if (intent == null || intent.getData() == null) {
            return null;
        }
        return TrustedUrlPolicy.trustedOrNull(intent.getData().toString());
    }

    private boolean isLowRamDevice() {
        ActivityManager activityManager =
                (ActivityManager) getSystemService(Context.ACTIVITY_SERVICE);
        return activityManager != null && activityManager.isLowRamDevice();
    }

    private void cancelFileChooser() {
        ValueCallback<Uri[]> callback = filePathCallback;
        filePathCallback = null;
        if (callback != null) {
            try {
                callback.onReceiveValue(null);
            } catch (RuntimeException ignored) {
                // The callback belongs to a renderer that may already be gone.
            }
        }
    }

    private void cancelPendingRendererRecovery() {
        if (pendingRendererRecovery != null) {
            mainHandler.removeCallbacks(pendingRendererRecovery);
            pendingRendererRecovery = null;
            automaticRendererRecoveries = Math.max(0, automaticRendererRecoveries - 1);
        }
    }

    private void detachAndDestroyWebView(WebView target) {
        if (target == null) {
            return;
        }
        ViewParentCompat.removeFromParent(target);
        try {
            target.stopLoading();
        } catch (RuntimeException ignored) {
            // Continue releasing the remaining renderer references.
        }
        try {
            target.setDownloadListener(null);
        } catch (RuntimeException ignored) {
            // Continue releasing the remaining renderer references.
        }
        try {
            target.setWebChromeClient(null);
        } catch (RuntimeException ignored) {
            // Continue releasing the remaining renderer references.
        }
        try {
            target.setWebViewClient(null);
        } catch (RuntimeException ignored) {
            // Continue releasing the remaining renderer references.
        }
        try {
            target.removeAllViews();
        } catch (RuntimeException ignored) {
            // Continue to the final destroy call.
        }
        try {
            target.destroy();
        } catch (RuntimeException ignored) {
            // A dead renderer can reject cleanup calls; all Java references are still released.
        }
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        setIntent(intent);
        String trustedDeepLink = trustedUrlFromIntent(intent);
        if (trustedDeepLink != null) {
            lastTrustedUrl = trustedDeepLink;
            retryLastPage();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        activityResumed = true;
        if (webView == null && webViewAbsenceReason == WebViewAbsenceReason.BACKGROUND_MEMORY) {
            if (createWebView()) {
                loadTrustedUrl(lastTrustedUrl);
            }
        } else if (webView == null
                && webViewAbsenceReason == WebViewAbsenceReason.RENDERER_RECLAIMED) {
            scheduleLimitedRendererRecovery();
        } else {
            if (webView != null) {
                webView.onResume();
            }
        }
    }

    @Override
    protected void onPause() {
        activityResumed = false;
        if (webView != null) {
            webView.onPause();
        }
        swipeRefreshLayout.setRefreshing(false);
        super.onPause();
    }

    @Override
    protected void onStop() {
        cancelPendingRendererRecovery();
        swipeRefreshLayout.setRefreshing(false);
        super.onStop();
    }

    @Override
    @SuppressWarnings("deprecation")
    public void onTrimMemory(int level) {
        super.onTrimMemory(level);
        boolean backgroundPressure = level >= ComponentCallbacks2.TRIM_MEMORY_UI_HIDDEN
                && (lowRamDevice || isSystemLowOnMemory());
        boolean runningPressure = level >= ComponentCallbacks2.TRIM_MEMORY_RUNNING_LOW
                && level <= ComponentCallbacks2.TRIM_MEMORY_RUNNING_CRITICAL;
        if (!activityResumed && filePathCallback == null
                && (backgroundPressure || runningPressure)) {
            releaseBackgroundWebView();
        }
    }

    @Override
    @SuppressWarnings("deprecation")
    public void onLowMemory() {
        super.onLowMemory();
        if (!activityResumed && filePathCallback == null) {
            releaseBackgroundWebView();
        }
    }

    private boolean isSystemLowOnMemory() {
        ActivityManager activityManager =
                (ActivityManager) getSystemService(Context.ACTIVITY_SERVICE);
        if (activityManager == null) {
            return false;
        }
        ActivityManager.MemoryInfo memoryInfo = new ActivityManager.MemoryInfo();
        activityManager.getMemoryInfo(memoryInfo);
        return memoryInfo.lowMemory;
    }

    private void releaseBackgroundWebView() {
        WebView current = webView;
        if (current == null) {
            return;
        }
        String currentUrl = TrustedUrlPolicy.trustedOrNull(current.getUrl());
        if (currentUrl != null) {
            lastTrustedUrl = currentUrl;
        }
        webView = null;
        webViewAbsenceReason = WebViewAbsenceReason.BACKGROUND_MEMORY;
        cancelFileChooser();
        detachAndDestroyWebView(current);
    }

    @Override
    protected void onSaveInstanceState(@NonNull Bundle outState) {
        String currentUrl = webView == null ? null : TrustedUrlPolicy.trustedOrNull(webView.getUrl());
        outState.putString(STATE_TRUSTED_URL, currentUrl != null ? currentUrl : lastTrustedUrl);
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onDestroy() {
        cancelPendingRendererRecovery();
        cancelFileChooser();
        WebView current = webView;
        webView = null;
        webViewAbsenceReason = WebViewAbsenceReason.ACTIVITY_DESTROYED;
        detachAndDestroyWebView(current);
        mainHandler.removeCallbacksAndMessages(null);
        super.onDestroy();
    }

    private static final class ViewParentCompat {
        private ViewParentCompat() {
        }

        static void removeFromParent(View view) {
            if (view.getParent() instanceof ViewGroup) {
                ((ViewGroup) view.getParent()).removeView(view);
            }
        }
    }
}

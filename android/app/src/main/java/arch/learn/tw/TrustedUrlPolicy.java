package arch.learn.tw;

import java.net.URI;
import java.net.URISyntaxException;

public final class TrustedUrlPolicy {

    public static final String HOME_URL = "https://waatax.github.io/Arch/";

    private static final String TRUSTED_SCHEME = "https";
    private static final String TRUSTED_HOST = "waatax.github.io";
    private static final String TRUSTED_ROOT = "/Arch";

    private TrustedUrlPolicy() {
    }

    public static boolean isTrusted(String rawUrl) {
        if (rawUrl == null || rawUrl.isEmpty() || !rawUrl.equals(rawUrl.trim())) {
            return false;
        }

        try {
            URI uri = new URI(rawUrl);
            String scheme = uri.getScheme();
            String host = uri.getHost();
            int port = uri.getPort();
            String rawPath = uri.getRawPath();
            String lowerRawPath = rawPath == null ? "" : rawPath.toLowerCase(java.util.Locale.ROOT);

            return scheme != null
                    && TRUSTED_SCHEME.equalsIgnoreCase(scheme)
                    && host != null
                    && TRUSTED_HOST.equalsIgnoreCase(host)
                    && uri.getRawUserInfo() == null
                    && (port == -1 || port == 443)
                    && rawPath != null
                    && !rawPath.contains("\\")
                    && !lowerRawPath.contains("%2e")
                    && !lowerRawPath.contains("%2f")
                    && !lowerRawPath.contains("%5c")
                    && rawPath.equals(uri.normalize().getRawPath())
                    && (TRUSTED_ROOT.equals(rawPath) || rawPath.startsWith(TRUSTED_ROOT + "/"));
        } catch (URISyntaxException | IllegalArgumentException error) {
            return false;
        }
    }

    public static String trustedOrNull(String rawUrl) {
        return isTrusted(rawUrl) ? rawUrl : null;
    }

    public static String trustedOrHome(String rawUrl) {
        String trusted = trustedOrNull(rawUrl);
        return trusted != null ? trusted : HOME_URL;
    }
}

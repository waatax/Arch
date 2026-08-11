package arch.learn.tw;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class TrustedUrlPolicyTest {

    @Test
    public void acceptsHomeAndNestedArchPages() {
        assertTrue(TrustedUrlPolicy.isTrusted("https://waatax.github.io/Arch/"));
        assertTrue(TrustedUrlPolicy.isTrusted("https://waatax.github.io/Arch/subjects/mechanics/beam/?q=1#step"));
        assertTrue(TrustedUrlPolicy.isTrusted("HTTPS://WAATAX.GITHUB.IO/Arch/resources/"));
        assertTrue(TrustedUrlPolicy.isTrusted("https://waatax.github.io:443/Arch/"));
    }

    @Test
    public void rejectsWrongSchemeHostPortAndPath() {
        assertFalse(TrustedUrlPolicy.isTrusted("http://waatax.github.io/Arch/"));
        assertFalse(TrustedUrlPolicy.isTrusted("https://waatax.github.io.evil.example/Arch/"));
        assertFalse(TrustedUrlPolicy.isTrusted("https://evil.example/Arch/"));
        assertFalse(TrustedUrlPolicy.isTrusted("https://waatax.github.io:444/Arch/"));
        assertFalse(TrustedUrlPolicy.isTrusted("https://waatax.github.io/Architecture/"));
        assertFalse(TrustedUrlPolicy.isTrusted("https://waatax.github.io/other/"));
    }

    @Test
    public void rejectsCredentialsWhitespaceAndEncodedBoundaryBypasses() {
        assertFalse(TrustedUrlPolicy.isTrusted("https://user@waatax.github.io/Arch/"));
        assertFalse(TrustedUrlPolicy.isTrusted(" https://waatax.github.io/Arch/"));
        assertFalse(TrustedUrlPolicy.isTrusted("https://waatax.github.io/Arch/\n"));
        assertFalse(TrustedUrlPolicy.isTrusted("https://waatax.github.io/%41rch/"));
        assertFalse(TrustedUrlPolicy.isTrusted("https://waatax.github.io/Arch%2fother"));
        assertFalse(TrustedUrlPolicy.isTrusted("https://waatax.github.io/Arch/../other"));
        assertFalse(TrustedUrlPolicy.isTrusted("https://waatax.github.io/Arch/%2e%2e/other"));
        assertFalse(TrustedUrlPolicy.isTrusted("https://waatax.github.io/Arch\\other"));
    }

    @Test
    public void nullMalformedAndNonNetworkValuesAreRejected() {
        assertFalse(TrustedUrlPolicy.isTrusted(null));
        assertFalse(TrustedUrlPolicy.isTrusted(""));
        assertFalse(TrustedUrlPolicy.isTrusted("not a url"));
        assertFalse(TrustedUrlPolicy.isTrusted("javascript:alert(1)"));
        assertFalse(TrustedUrlPolicy.isTrusted("file:///Arch/index.html"));
        assertFalse(TrustedUrlPolicy.isTrusted("intent://waatax.github.io/Arch/#Intent;scheme=https;end"));
    }

    @Test
    public void helpersNeverReturnAnUntrustedPage() {
        assertEquals(
                "https://waatax.github.io/Arch/resources/",
                TrustedUrlPolicy.trustedOrHome("https://waatax.github.io/Arch/resources/"));
        assertEquals(TrustedUrlPolicy.HOME_URL, TrustedUrlPolicy.trustedOrHome("https://evil.example/Arch/"));
        assertNull(TrustedUrlPolicy.trustedOrNull("https://evil.example/Arch/"));
    }
}

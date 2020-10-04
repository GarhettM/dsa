package javaChallenges;

import org.junit.Test;
import static org.junit.Assert.*;

public class MultiBracketValidationTest {

    @Test
    public void testBracket() {
        MultiBracketValidation newThing = new MultiBracketValidation();
        assertTrue("This should return true", newThing.multiBracketValidation("[[[]]]"));
        assertFalse("This should return false", newThing.multiBracketValidation("[[[]{]"));
        assertTrue("This should return true", newThing.multiBracketValidation("Adf[adfgs[era(vfad)aerg{af{vasd}}acvsd]va]"));
        assertFalse("This should return REALLY false.", newThing.multiBracketValidation("ND{({)}N){N{c[0n0{})}90[n}(N{)]90[n0]"));
    }
}

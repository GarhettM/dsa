package javaChallenges;


import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThrows;


public class RepeatedWordTest {

    @Test
    public void testRepeatWord() throws Exception {

        String testStr = "This is a test of the emergency broadcast system, this is only a test.";
        String testStr2 = "There are no duplicate words in this string.";

        RepeatedWord newRepeat = new RepeatedWord();

        assertEquals("this", "this", newRepeat.repeatedWord(testStr));
        assertThrows("No duplicates in String", Exception.class,
                () -> newRepeat.repeatedWord(testStr2));
    }
}

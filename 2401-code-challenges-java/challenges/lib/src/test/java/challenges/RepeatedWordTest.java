package challenges;

import org.junit.Test;
import static org.junit.Assert.*;

public class RepeatedWordTest {

    @Test
    public void repeatedWordTest() {

        String strTest = "This is a test, to see if test comes back as the first repeated word.";
        String strTest1 = "This is a test and it comes back as no repeated word.";
        RepeatedWord repeat = new RepeatedWord();

        assertEquals("Test should come back", "test", repeat.repeatedWord(strTest));
        assertEquals("Test should come back", "No repeated word", repeat.repeatedWord(strTest1));

    }
}

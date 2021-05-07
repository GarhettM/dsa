package challenges;

import java.util.HashSet;

public class Redfin {

    public int count(String s) {
        HashSet set = new HashSet();

        for(int i = 0; i < s.length(); i++) {
            set.add(s.charAt(i));
        }
        return set.size();
    }
}

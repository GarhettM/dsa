package javaChallenges;

import java.util.HashSet;

public class RepeatedWord {

    public String repeatedWord(String str) throws Exception {

        String newStr = str.toLowerCase();

        String[] arr = newStr.split("\\W+");

        HashSet<String> wordBucket = new HashSet<>();

        for(String val : arr) {
            if(!wordBucket.add(val)) {
                return val;
            }
        }
        throw new Exception();
    }
}

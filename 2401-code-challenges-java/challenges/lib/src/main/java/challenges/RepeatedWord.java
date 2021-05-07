package challenges;

import java.util.HashSet;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RepeatedWord {

    public String repeatedWord(String str) {

        HashSet<String> sett = new HashSet<>();
        String tempStr = "";
        for(int i = 0; i < str.length(); i++) {
            String tempStr2 = Character.toString(str.charAt(i));
            String pattern = "[^a-zA-Z\\'\\-]";
            boolean test = Pattern.matches(pattern, tempStr2);

            if(!test) {
                tempStr = String.format("%s%s", tempStr, tempStr2);
            } else {
                if (sett.add(tempStr)) {
                    tempStr = "";
                } else {
                    return tempStr;
                }
            }
        }
        return "No repeated word";
    }
}

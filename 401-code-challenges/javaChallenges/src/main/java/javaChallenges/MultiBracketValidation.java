package javaChallenges;

import java.util.ArrayList;
import java.util.HashMap;

public class MultiBracketValidation {

    public static boolean multiBracketValidation(String input)  {

        ArrayList<Character> testArr = new ArrayList<Character>();
        HashMap<Character, Character> map = new HashMap<Character, Character>();
        map.put('[', ']');
        map.put('{', '}');
        map.put('(', ')');

        for(int i = 0; i < input.length(); i++) {
            if(input.charAt(i) == '[' || input.charAt(i) == '{' || input.charAt(i) == '(') {
                testArr.add(input.charAt(i));
            }
            if(input.charAt(i) == ']' || input.charAt(i) == '}' || input.charAt(i) == ')') {

                if(map.get(testArr.get(testArr.size() -1)) != input.charAt(i)) {
                    return false;
                } else {
                    testArr.remove(testArr.size() - 1);
                }
            }
        }
        return true;
    }
}

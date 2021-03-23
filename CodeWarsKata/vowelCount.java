/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/


public class Vowels {

  public static int getCount(String str) {
    int vowelsCount = 0;
    int pointer = 0;
    
    while(pointer < str.length()) {

      if(str.charAt(pointer) != 'a' && str.charAt(pointer) != 'i' && str.charAt(pointer) != 'o' && str.charAt(pointer) != 'e' && str.charAt(pointer) != 'u') {
        pointer++;
        continue;
      }
      vowelsCount++;
      pointer++;
    }
    
    return vowelsCount;
  }
}

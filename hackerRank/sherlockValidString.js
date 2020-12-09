// Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just  character at  index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.

// Example

// This is a valid string because frequencies are .


// This is a valid string because we can remove one  and have  of each character in the remaining string.


// This string is not valid as we can only remove  occurrence of . That leaves character frequencies of .

// Function Description

// Complete the isValid function in the editor below.

// isValid has the following parameter(s):

// string s: a string
// Returns

// string: either YES or NO
// Input Format

// A single string .




function isValid(s){
    if(s.length === 0){
        return 'NO';
    }
    if(s.length === 1){
        console.log('YES')
        return 'YES';
    }
    let newString = s.split('').sort();
    let currentChar = newString[0];
    let charCount = 0;
    let countArray = [];
    for(let char of newString){
        console.log(char);
        if(currentChar === char){
            charCount++;
        }
        if(currentChar !== char){
            countArray.push(charCount);
            charCount = 1;
        }
        currentChar = char;
    }
    if(currentChar === newString[newString.length-2]){
        // charCount++;
        countArray.push(charCount);
    }
    if(currentChar !== newString[newString.length-2]){
        countArray.push(charCount);
        charCount = 1;
    }
    
    charCount = 0;
    let newCountArray = countArray.sort();
    console.log(newCountArray);
    if(newCountArray.length === 1 || newCountArray[charCount] === newCountArray[newCountArray.length-1]){
        return 'YES';
    }
    if(newCountArray[charCount] < newCountArray[newCountArray.length -1] && newCountArray[newCountArray.length -1] === newCountArray[newCountArray.length -2] && newCountArray[charCount] !== newCountArray[charCount+1]){
        return 'YES'
    }
    if((newCountArray[newCountArray.length -1] - newCountArray[charCount])  >= 2 || newCountArray[charCount] !== newCountArray[newCountArray.length-2]){
        return 'NO';
    }
    return 'YES';
}

// Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, , determine how many letters of the SOS message have been changed by radiation.

// Example


// The original message was SOSSOS. Two of the message's characters were changed in transit.

// Function Description

// Complete the marsExploration function in the editor below.

// marsExploration has the following parameter(s):

// string s: the string as received on Earth
// Returns

// int: the number of letters changed during transmission
// Input Format

// There is one line of input: a single string, .



function marsExploration(s) {
    let count = 0;

    while(s.length > 0) {
        let temp;
        temp = s.substring(0, 3);
        s = s.substr(3)
        console.log(temp, s);
        
        if(temp[0] !== "S") {
            count++;
        }
        if(temp[1] !== "O") {
            count++;
        }
        if(temp[2] !== "S") {
            count++;
        }
        
    }

    return count;
}

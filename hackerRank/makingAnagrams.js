// A student is taking a cryptography class and has found anagrams to be very useful. Two strings are anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// The student decides on an encryption scheme that involves two large strings. The encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Determine this number.

// Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

function makeAnagram(a, b) {
    let newA = a;
    let newB = b;
    let counter = 0;
    for(let i = 0; i < a.length; i++) {
        if(!b.includes(a[i])) {
            newA = newA.replace(a[i], '');
            counter++;
        }
    }
    
    for(let j = 0; j < b.length; j++) {
        if(!a.includes(b[j])) {
            newB = newB.replace(b[j], '');
            counter++;
        }
    }
    newA = newA.split('').sort();
    newB = newB.split('').sort();
    let temp = "";
    const newNewA = [];
    const newNewB = [];
    
    for(let l = 0; l < newA.length; l++) {
        if(temp === "" || temp.includes(newA[l])) {
            temp = `${temp}${newA[l]}`
        } else {
            newNewA.push(temp);
            temp = newA[l];
        }
    }
    newNewA.push(temp);
    temp = "";
    for(let m = 0; m < newB.length; m++) {
        if(temp === "" || temp.includes(newB[m])) {
            temp = `${temp}${newB[m]}`
        } else {
            newNewB.push(temp);
            temp = newB[m];
        }
    }
    newNewB.push(temp);
    
    for(let n = 0; n < newNewB.length; n++) {
        if(newNewA[n].length > newNewB[n].length) {
            counter += newNewA[n].length - newNewB[n].length;
        }
        if(newNewB[n].length > newNewA[n].length) {
            counter += newNewB[n].length - newNewA[n].length;
        }
    }
    return counter;
}

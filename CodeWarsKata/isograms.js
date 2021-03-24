
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.


function isIsogram(str){
  str = str.toLowerCase();
  if(str === "") {
    return true;
  }
  let set = new Set();
  
  for(let i = 0; i < str.length; i++) {
    set.add(str[i]);
  }
  if(set.size === str.length) {
    return true;
  } else {
    return false;
  }
}
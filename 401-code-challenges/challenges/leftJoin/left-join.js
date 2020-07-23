'use script';

const HashMap = require('../hashTable/hashTable.js');


function leftJoin(leftHash, rightHash) {
  let output = []
  for (let i = 0; i < leftHash.keysArr.length; i++) {
    
    if(rightHash.keysObj[leftHash.keysArr[i]])  {
      test = [ leftHash.keysArr[i], leftHash.get(leftHash.keysArr[i]), rightHash.keysObj[leftHash.keysArr[i]] ]

      output.push(test);
    } 
    if(!rightHash.keysObj[leftHash.keysArr[i]])  {
      test = [ leftHash.keysArr[i], leftHash.get(leftHash.keysArr[i]), null ]

      output.push(test);
    }
  }
  return output
}

module.exports = leftJoin
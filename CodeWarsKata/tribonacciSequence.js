// 8/18/2020

// write a function that takes in an array of 3 values (not two) and a number of iterations to run through. And return the sequence.


function tribonacci(signature,n){
  const final = signature;
  
  if(n===0) {
    return [];
  }
  if(n===1) {
    return [signature[0]];
  }
  if(n===2) {
    return [signature[0], signature[1]];
  }
  if(n===3) {
    return final;
  }
  
  let temp = 0;
  for (let i = 0; i < n - 3; i++) {
    temp = final[i] + final[i+1] + final[i + 2]
    final.push(temp)
  }
  return final
}
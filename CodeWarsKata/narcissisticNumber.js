//08/18/2020

//Write a function that takes in a value and returns a boolean. The boolean should return true if the number is considered "narcissistic" and false if it isn't.


function narcissistic(value) {
  const num = value.toString();
  const exp = num.length;
  let final = 0;
  for (let i = 0; i < exp; i++) {
    final += Math.pow(num[i], exp)
  }
  if (value === final) return true;
  return false
}

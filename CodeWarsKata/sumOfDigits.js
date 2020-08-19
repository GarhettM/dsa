//08/18/2020

// Write a function that takes in a number and adds the the individual digits together until the final result is a single digit. Return that single digit.

function digital_root(n) {
  let final = 0;

  function helper(num)  {
    const temp = n.toString().split('');
    for  (let i = 0; i < temp.length; i++) {
      final += parseInt(temp[i])
    }
    if (final.toString().length > 1) {
      digital_root(final);
    } else {
      return a = parseInt(final)
    }
  }
  helper(n)
  return a;
}
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// *** All tests passing. This is not my finest work but I was dealing with algorithm issues and just slapped everything together to get it to work. The number of leading zeros was a challenge to solve for.

function incrementString (strng) {

  let temp = '';

  if(strng[strng.length - 1] <= 0 || strng[strng.length - 1] <= 8) {
    let newNum = parseInt(strng[strng.length - 1])
    newNum++;
    strng = strng.substring(0, strng.length - 1)
    temp = `${strng}${newNum.toString()}`
  } else if(strng[strng.length - 1] === '9')  {
    let i = strng.length -1;
    let k = 1
    while(strng[i] <= 9 || strng[i] > 0) {
      i--;
    }
    i++
    let minus = strng.slice(i);
    let j = 0;
    let counter = 0;
    temp = strng.slice(0, i);
    let tempMinus = minus;
    minus = parseInt(minus);
    while(tempMinus[j] === '0' && tempMinus[j+1] === '0') {
      temp = `${temp}0`
      j++
    }
    temp.slice(temp.length-1)
    minus++;
    minus = String(minus)
    temp = `${temp}${minus}`
  } else {
    temp = `${strng}1`
  }

  return temp;
}
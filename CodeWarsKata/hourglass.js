
// Hourglass matrix code challenge. Easy mode

// Done on Hacker Rank.

function hourglassSum(arr) {
  let final = -1000000000;

  for(let i = 0; i < arr.length; i++) {
    if(i < arr.length -2) {

      for(let j = 0; j < arr[i].length; j++) {
        if(j < arr[i].length - 2) {

          let temp = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

          if(temp > final) { 
            final = temp;
          }
        }
      }
    }
  }
  return final;
}

hourglassSum(test)


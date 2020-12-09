// You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.


function minimumSwaps(array){
    let swaps = 0;
    for(let i = 0; i < array.length; i++){
        while(array[i] !== i+1){
            let temp = array[array[i]-1];
            array[array[i]-1] = array[i];
            array[i] = temp; 
            swaps++;
        }
    }
    return swaps;
}

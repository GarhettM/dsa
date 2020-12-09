'use strict';
function minimumBribes(q) {
let bribeCount = 0,
    min = q.length;
for(let i = q.length -1; i >= 0; i--){
    if((q[i]-1) - i > 2) {
        console.log('Too chaotic')
         return 'Too Chaotic';
        }
    if((q[i]-1) > i){
        bribeCount += (q[i]-1) - i;
    }else {
        if(min > q[i]){
            min = q[i];
        }
        else if(q[i] !== min){
            bribeCount++;
        }
    } 
}
console.log(bribeCount);
return bribeCount;

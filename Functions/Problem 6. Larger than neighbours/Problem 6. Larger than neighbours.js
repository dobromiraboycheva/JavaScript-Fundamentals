/*Write a function that checks if the element at given position in given array of integers is bigger than its two neighbours (when such exist).*/
function isBigger(array,index){
    var isBigger=true;
    for(var i=index-1;i<=index+1;i+=2){
        if(i>=0&&i<array.length) {
            if (array[i] >= array[index]) {
                isBigger = false;
                break;
            }
        }
    }
    return isBigger;
}

console.log('[1,3,4,2,1,] index: 1 is larger then neighbours  -> '+isBigger([1,3,4,2,1,],1));
console.log('[1,3,4,2,1,] index: 2 is larger then neighbours  -> '+isBigger([1,3,4,2,1,],2));
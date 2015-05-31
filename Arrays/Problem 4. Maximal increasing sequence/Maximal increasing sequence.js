/*Write a script that finds the maximal increasing sequence in an array. */

var numbers=[3, 2, 3, 4,5, 2, 2, 4];

function maxIncreasingSequence(array){
    var best=[array[0]];
    var temp=[array[0]];
    for(var i=1;i<array.length;i++){
        if(array[i]>array[i-1]){
            temp.push(array[i]);
        }
        else {
            temp=[array[i]];
        }

        if(temp.length>best.length){
            best=temp;
        }
    }
    return best;
}
console.log("numbers=[3, 2, 3, 4,5, 2, 2, 4];");
console.log(maxIncreasingSequence(numbers));
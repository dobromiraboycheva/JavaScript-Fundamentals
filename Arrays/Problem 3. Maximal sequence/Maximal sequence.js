/*Write a script that finds the maximal sequence of equal elements in an array.*/
var array=[3, 2, 3, 4, 2,2, 2, 4];

function maxEqualSequence(array){
    var best=[array[0]];
    var temp=[array[0]];
    for(var i=1;i<array.length;i++){
        if(array[i]!==temp[0]){
            temp=[array[i]];
        }
        else{
            temp.push(array[i]);
        }
        if(temp.length>best.length){
            best=temp;
        }
    }
    return best;
}
console.log("array=[3, 2, 3, 4, 2,2, 2, 4]");
console.log(maxEqualSequence(array).join(', '));
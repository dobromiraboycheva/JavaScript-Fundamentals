/*Write a script that finds the most frequent number in an array.*/
var numbers=[4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];

function mode(array){
    var modeMap={};
    var maxNumber=array[0];
    var maxCount=1;
    for(var i=0;i<array.length;i++){
        var num=array[i];
        if(modeMap[num]==null){
            modeMap[num]=1;
        }
        else{
            modeMap[num]++;
        }
        if(modeMap[num]>maxCount){
            maxNumber=num;
            maxCount=modeMap[num];
        }
    }
    return [maxNumber,maxCount];
}

var result=mode(numbers);
console.log('numbers=[4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];');
console.log(result[0] +'( '+result[1]+' times )');
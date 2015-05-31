/*Write a script that finds the max and min number from a sequence of numbers.*/
var numbers=[11,17,,2415,-986,25234];

var minInd = 0;
var maxInd = 0;

for(var i = 0; i < numbers.length; i++){
    if(numbers[maxInd] < numbers[i]) maxInd = i;
    if(numbers[i] < numbers[minInd]) minInd = i;
}
console.log('numbers=[11,17,,2415,-986,25234];');
console.log('min: ' + numbers[minInd]);
console.log('max: ' + numbers[maxInd]);
/*Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.*/

var divided=35;
var undivided=30;
function isDividedBy5And7(number){
    return !(number % 5)&&!(number%7);
}
console.log('Is divided by 5 and 7?');
console.log(isDividedBy5And7(divided));
console.log(isDividedBy5And7(undivided));
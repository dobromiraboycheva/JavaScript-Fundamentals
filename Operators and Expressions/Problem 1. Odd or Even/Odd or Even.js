/*Write an expression that checks if given integer is odd or even.*/

var even=7;
var odd=4;
function isODD(number){
    return !(number % 2);
}
console.log('Is ODD?');
console.log(isODD(even));
console.log(isODD(odd));
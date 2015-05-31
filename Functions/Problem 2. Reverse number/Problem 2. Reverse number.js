/*Write a function that reverses the digits of given decimal number.*/

function reverseNumber(number){
    var numberToString=number.toString();
    var numberSplit=numberToString.split("");
    var reverse=numberSplit.reverse();
    var result=reverse.join("");
    return result;
}

console.log('256 ->'+reverseNumber(256));
console.log('123.45 ->'+reverseNumber(123.45));
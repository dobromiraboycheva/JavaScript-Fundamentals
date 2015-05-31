/*Write an expression that checks for given integer if its third digit (right-to-left) is 7.*/
var isThirdSeven=111735;
var notThirsSeven=1117;

function thirdDigitIsSeven(number) {
    return Math.floor(number / 100) % 10 === 7
}

console.log(thirdDigitIsSeven(isThirdSeven));
console.log(thirdDigitIsSeven(notThirsSeven));
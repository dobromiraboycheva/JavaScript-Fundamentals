/* Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
 The bits are counted from right to left, starting from bit #0.
 The result of the expression should be either 1 or 0. */

var thirdBitIsZero=62241;
var thirdBitIsOne=5343;

function getBitAt(number, position){
    return (number>>position)&1;
}

console.log(getBitAt(thirdBitIsZero,3));
console.log(getBitAt(thirdBitIsOne,3));
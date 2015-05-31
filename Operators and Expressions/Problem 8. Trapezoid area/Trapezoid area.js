/*Write an expression that calculates trapezoid's area by given sides a and b and height h. */
var a=2;
var b=1;
var h=33;

function trapezoidArea(a,b,h){
    return ((a+b)/2)*h;
}

console.log('Trapezoid area is: '+trapezoidArea(a,b,h));
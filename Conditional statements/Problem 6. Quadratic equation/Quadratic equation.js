/*Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).
 Calculates and prints its real roots.*/
var a=2;
var b=5;
var c=-3;
console.log('a='+a);
console.log('b='+b);
console.log('c='+c);
function root(sign, D, b, a){
    return (-b + Math.sqrt(D) * sign) / (2 * a);
}
function roots(a, b, c){
    var D = b * b - 4 * a * c;
    if(D < 0){
        return [null];
    }
    else if(!D){
        return [root(-1, D, b, a)];
    }
    else{
        return[root(1, D, b, a), root(-1, D, b, a)];
    }
}

console.log(roots(a,b,c));
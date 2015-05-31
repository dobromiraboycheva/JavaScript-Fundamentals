/*Write a script that finds the biggest of three numbers.
 Use nested if statements.*/
var a=-2;
var b=-2;
var c=1;
console.log('a='+a);
console.log('b='+b);
console.log('c='+c);
function biggestNumber(a,b,c){
    if(a>=b){
    if(a>=c){
        return a;
    }
    return c;
}
if(c>=b){
   return c;
}
 return b;
}
console.log('Bigest number:'+biggestNumber(a,b,c));
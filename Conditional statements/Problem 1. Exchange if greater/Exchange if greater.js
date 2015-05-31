/*Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
 As a result print the values a and b, separated by a space. */
var a=5;
var b=2;

console.log('a='+a);
console.log('b='+b+'\n');

if(a>b){
 var c=a;
    a=b;
    b=c;
}

console.log('a='+a);
console.log('b='+b);
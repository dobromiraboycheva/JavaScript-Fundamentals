/*Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
 Use a sequence of if operators.*/
var a=-2;
var b=-2;
var c=1;
var product=a*b*c;
console.log('a='+a);
console.log('b='+b);
console.log('c='+c);
console.log('product='+product);
if(product>0){
    console.log('+');
}
else if(product<0){
    console.log('-');
}
else{
    console.log('0');
}
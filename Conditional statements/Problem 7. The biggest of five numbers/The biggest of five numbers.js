/*Write a script that finds the greatest of given 5 variables.
 Use nested if statements.*/
var a=5;
var b=2;
var c=2;
var d=4;
var e=11;
console.log('a='+a);
console.log('b='+b);
console.log('c='+c);
console.log('d='+d);
console.log('e='+e);
var numbers=[a,b,c,d,e];
var max=numbers[0];
for(var i=1;i<numbers.length;i+=1){
    if(numbers[i]>max){
        max=numbers[i];
    }
}
console.log('Biggest number:'+max);

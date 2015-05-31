/*Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time*/
var n=40;
console.log('n=40');
for(var number=1;number<=n;number+=1) {
    if (number % (3*7)) {
        console.log(number);
    }
}
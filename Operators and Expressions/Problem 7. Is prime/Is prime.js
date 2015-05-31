/*Write an expression that checks if given positive integer number n (n ? 100) is prime.*/
function isPrime(number){
    if(number<2){
        return false;
    }
    for(var divisor=2;divisor<=Math.sqrt(number);divisor+=1)
    {
        if(!(number%divisor)){
            return false;
        }
    }
    return true;
}

var prime=19;
var notPrime=20;

console.log(isPrime(prime));
console.log(isPrime(notPrime));

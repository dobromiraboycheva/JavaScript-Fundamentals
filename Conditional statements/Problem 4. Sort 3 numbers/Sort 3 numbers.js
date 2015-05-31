/*Sort 3 real values in descending order.
 Use nested if statements. */
var a=-2;
var b=2;
var c=1;
console.log('a='+a);
console.log('b='+b);
console.log('c='+c);
var sorted=[];
function sortThreeNumbers(a,b,c) {
    if (a >= b) {
        if (b >= c) {
            sorted.push(a, b, c);
        }
        else if (c > a) {
            sorted.push(c, a, b);
        }
        else {
            sorted.push(a, c, b);
        }
    }
    else {
        if (b >= c) {
            if (c >= a) {
                sorted.push(b,c,a);
            }
            else{
                sorted.push(b,a,c)
            }
        }
        else{
            sorted.push(c,b,a);
        }
    }
    return sorted;
}

console.log(sortThreeNumbers(a,b,c));
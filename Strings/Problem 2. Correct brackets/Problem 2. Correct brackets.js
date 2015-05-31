/*Write a JavaScript function to check if in a given expression the brackets are put correctly.
 Example of correct expression: ((a+b)/5-d). Example of incorrect expression: )(a+b)).*/
function isCorrectBrackets(expression){
    var check=0;
    for(var i=0;i<expression.length;i++){
        if(expression[i]==='('){
            check++;
        }
        else if(expression[i]===')'){
            check--;
        }
        if(check<0){
            return false;
        }
    }
    return !check;
}
console.log('((a+b)/5-d)');
console.log('Correct -> '+isCorrectBrackets('((a+b)/5-d)'));
console.log(')(a+b))')
console.log('Correct -> '+isCorrectBrackets(')(a+b))'));
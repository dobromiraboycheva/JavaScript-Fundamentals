/*Write a JavaScript function that reverses a string and returns it.*/

function reverse(string){
    var reversed=[];
    for(var i=string.length-1;i>=0;i--){
        reversed.push((string[i]));
    }
    return reversed.join('');
}

console.log('sample -> '+ reverse('sample'));
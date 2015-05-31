/*Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).*/
function occurrenceCount(text,word) {
    var reg = new RegExp(word, 'gi');
    return (text.match(reg)).length;
}

var text='The text is as follows: We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.';
var word='in';
console.log('text='+text);
console.log('word='+word);
console.log('times: '+ occurrenceCount(text,word));
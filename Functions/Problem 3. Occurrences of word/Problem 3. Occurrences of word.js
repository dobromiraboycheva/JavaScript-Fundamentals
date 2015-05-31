/*Write a function that finds all the occurrences of word in a text.
 The search can be case sensitive or case insensitive.
 Use function overloading.*/
function countOccurrence(text,word,isCaseSensitive){
 var replacePunctuation=text.replace(/\W+/g, ' ');
 if(!isCaseSensitive){
  replacePunctuation=replacePunctuation.toLowerCase();
  word=word.toLowerCase();
 }
 var words=replacePunctuation.split(' ');
 var occurrences=0;
 for(var i=0;i<words.length;i+=1){
  if(words[i]===word){
   ++occurrences;
  }
 }
 return occurrences;
}

var text='hjk hjk Hjk ght hkt hJk';
console.log("text='hjk hjk Hjk ght hkt hJk';");
console.log('hjk Case sensitive=false ->'+countOccurrence(text,'hjk',false)+' times');
console.log('hjk Case sensitive=true ->'+countOccurrence(text,'hjk',true)+' times');
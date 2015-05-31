/*Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element.
 Use the function from the previous exercise. */
function indexOfFirstBigger(array){
 for(var index in array){
  if(isBigger(array,index)){
   return index;
  }
 }
 return -1;
}

function isBigger(array,index){
 var isBigger=true;
 for(var i=index-1;i<=index+1;i+=2){
  if(i>=0&&i<array.length) {
   if (array[i] >= array[index]) {
    isBigger = false;
    break;
   }
  }
 }
 return isBigger;
}

console.log('[1,3,4,2,1,2] -> index: '+indexOfFirstBigger([1,3,4,2,1,2]));
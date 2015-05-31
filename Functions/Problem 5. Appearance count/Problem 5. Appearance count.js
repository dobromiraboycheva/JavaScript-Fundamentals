/*Write a function that counts how many times given number appears in given array.
 Write a test function to check if the function is working correctly.*/

function getCount(array,number){
 var count=0;
 for(var element in array){
  if(array[element]===number){
   ++count;
  }
 }
 return count;
}

function assert(array,number, expected){
 return getCount(array,number)==expected;
}


console.log('[5,4,3,5,6,7] number: 2 times: 1 ->'+assert([5,4,3,5,6,7], 2, 1));
console.log('[1,1,1] number: 1 times: 3 ->'+assert([1,1,1], 1, 3));
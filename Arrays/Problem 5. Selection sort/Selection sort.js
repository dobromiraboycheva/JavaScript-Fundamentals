/*Sorting an array means to arrange its elements in increasing order.
 Write a script to sort an array.
 Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.*/

Array.prototype.selectionSort=function(){
 var sorted=[];
 while(this.length){
  var minIndex=0;
  for(var i=0; i<=this.length;i++) {
   if (this[i] < this[minIndex]) {
    minIndex = i;
   }
  }
  sorted.push(this[minIndex]);
  this.splice(minIndex,1);
 }
 this.push(sorted);
};

var numbers=[4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3	];
numbers.selectionSort();
console.log('numbers=[4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3	];');
console.log(numbers.join(', '));
/*Write a function that removes all elements with a given value.
 Attach it to the array type.
 Read about prototype and how to attach methods.

 var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
 arr.remove(1); //arr = [2,4,3,4,111,3,2,'1'];*/


Array.prototype.remove=function(element){
 for(var i=0;i<this.length;i+=1){
  if(this[i]===element){
   this.splice(i,1);
   --i;
  }
 }
 return this;
}

var array=[1,2,1,3,1,4,2,4,5,3,4,6];
console.log(array.join(', '));
array.remove(1);
console.log(array.join(', '));
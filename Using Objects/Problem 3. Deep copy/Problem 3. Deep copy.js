/*Write a function that makes a deep copy of an object.
 The function should work for both primitive and reference types.*/

function clone(obj) {
 if (typeof obj !== 'object') {
  return obj;
 }
 var cloned={};
 for(var prop in obj){
  cloned[prop]=clone(obj[prop]);
 }
 return cloned;
}

console.log(clone(7));
console.log(clone({name:'Pesho'}));
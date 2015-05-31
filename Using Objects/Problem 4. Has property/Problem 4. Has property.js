/*Write a function that checks if a given object contains a given property.

 var obj  = …;
 var hasProp = hasProperty(obj, 'length');*/
function hasProperty(obj, prop){
 return obj.hasOwnProperty(prop);
}

var obj = {
 name: 'Pesho',
 age: Math.min(),
 occupation: 'Pesho\'s cofee'
};
obj.gender = 'unknown';
console.log("hasProperty(obj, 'occupation') ->"+hasProperty(obj, 'occupation'));
console.log("hasProperty(obj, 'gender') ->"+hasProperty(obj, 'gender'));
console.log("hasProperty(obj, 'gender') ->"+hasProperty(obj, 'gender'));



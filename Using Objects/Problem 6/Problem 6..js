/*Write a function that groups an array of people by age, first or last name.
 The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
 Use function overloading (i.e. just one function)

 Example:

 var people = {…};
 var groupedByFname = group(people, 'firstname');
 var groupedByAge= group(people, 'age');*/
function Person(firstname, lastname, age){
 if(isNaN(age) || !isFinite(age)){
  throw new Error('age must be a number');
 }

 if(!(this instanceof  Person)){
  return new Person(firstname, lastname, age);
 }

 this.firstname = firstname;
 this.lastname = lastname;
 this.age = age;
}

Person.prototype.toString = function(){
 return '(' + this.firstname + ' ' + this.lastname + ',' + this.age + ')';
};

var people = [
 new Person('Ivan', 'Tishev', 24),
 new Person('Ivailo', 'Tishkov', 29),
 new Person('Ivancho', 'Mishkov', 43),
 new Person('Gosho', 'Gishkov', 21),
 new Person('Goshko', 'Lishkov', 25),
 new Person('Ico', 'Teshev', 38),
 new Person('Icko', 'Peshev', 30),
 new Person('Tencho', 'Leshev', 26),
 new Person('Pencho', 'Meshev', 31)
];

function group(arr, prop){
 var group = [];

 for(var ind in arr){
  var currProp = arr[ind][prop];
  group[currProp] = group[currProp] || [];
  group[currProp].push(arr[ind]);
 }

 return group;
}

function printGroups(prop, arr){
 console.log(prop);
 for(var key in arr){
  console.log(arr[key].join('; '));
 }
 console.log();
}

var props = ['firstname', 'lastname', 'age'];

for(var ind in props){
 var groups = group(people, props[ind]);
 printGroups(props[ind], groups);
}


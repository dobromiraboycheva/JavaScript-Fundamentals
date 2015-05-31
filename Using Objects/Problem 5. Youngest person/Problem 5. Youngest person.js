/*Write a function that finds the youngest person in a given array of people and prints his/hers full name
 Each person has properties firstname, lastname and age.

 Example:

 var people = [
 { firstname : 'Gosho', lastname: 'Petrov', age: 32 },
 { firstname : 'Bay', lastname: 'Ivan', age: 81},… ];*/

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
 return this.firstname + ' ' + this.lastname+ ' ' + this.age;
};

function comparePeople(a, b){
 return a.age - b.age;
}

var people = [
 new Person('Gosho', 'Petrov',32),
 new Person('Bat', 'Ivan', 81),
 new Person('Goshoko', 'Petrovchev',30)
];
console.log(people.join('\n'));

people.sort(comparePeople);
console.log('Sorted:');
console.log(people.join('\n'));
console.log('Youngest: '+people[0].toString());

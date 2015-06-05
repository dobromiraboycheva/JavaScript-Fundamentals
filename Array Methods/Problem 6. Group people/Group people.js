/*Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
 Use Array#reduce
 Use only array methods and no regular loops (for, while)*/
var people = createPeople();
var group = people.reduce(function(obj, item) {
 if (obj[item.firstName[0]]) {
  obj[item.firstName[0]].push(item);
 } else {
  obj[item.firstName[0]] = [item];
 }
 return obj;
}, {});
console.log(group);
function createPeople() {
 var i,
     firstName=['Ivana','Dragana','Petkana','Peshka','Geshka','Ivan','Dragan','Petkan','Pesho','Gosho'],
     lastName=['Ivova','Goshova','Todorova','Dimitrova','Ivanova','Ivov','Goshov','Todorov','Dimitrov','Ivanov'],
     array=[];
 for(i=0;i<=10;i++){
  array[i]=createPeopleObject(firstName[i],lastName[i],(Math.random() *40)| i+11, (i < 4));
 }
 return array;
}

function createPeopleObject(firstName, lastName, age, gender) {
 return {
  firstName: firstName,
  lastName: lastName,
  age: age,
  gender: gender
 }
}
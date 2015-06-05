/*Write a function that prints all underaged persons of an array of person
 Use Array#filter and Array#forEach
 Use only array methods and no regular loops (for, while)*/
var people = createPeople();
var peopleUnder18Age=people.filter(function(item){
 return item.age<18;
}).forEach((function(item){
 console.log(item);
}));
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
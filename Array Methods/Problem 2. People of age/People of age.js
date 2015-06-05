/*Write a function that checks if an array of person contains only people of age (with age 18 or greater)
 Use only array methods and no regular loops (for, while)*/
var people = createPeople();
var peopleOf18Only=people.every(function(item){
 return item.age>=18;
});
console.log(peopleOf18Only);

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
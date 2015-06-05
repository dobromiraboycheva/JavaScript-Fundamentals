/*Write a function that calculates the average age of all females, extracted from an array of persons
 Use Array#filter
 Use only array methods and no regular loops (for, while)*/
var people = createPeople();
var femaleAverageAge=people.filter(function(item){
 return item.gender;
}).reduce((function(sum,item,i,array){
 var count=array.length;
 return(sum+item.age/count);
}),0);
console.log(femaleAverageAge);
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
/*Write a function that finds the youngest male person in a given array of people and prints his full name
 Use only array methods and no regular loops (for, while)
 Use Array#find*/

var people = createPeople();
if(!Array.prototype.find){
 Array.prototype.find=function(item) {
  var i, l = this.length;
  for (i = 0; i < l; i++) {
   if (item(this[i], i, this)) {
    return this[i];
   }
  }
 };
}
var youngestMale=people.sort(function(a,b){
 return a.age- b.age;
}).find((function(item){
 return !item.gender;
}));
console.log(youngestMale.firstName,youngestMale.lastName);
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

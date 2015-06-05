/*Write a functio for creating persons.
 Each person must have firstname, lastname, age and gender (true is female, false is male)
 Generate an array with ten person with different names, ages and genders*/
var people = createPeople();
people.forEach(function (item) {
    console.log(item);
});

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
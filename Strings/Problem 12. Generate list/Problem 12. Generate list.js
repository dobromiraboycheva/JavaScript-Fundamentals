/*Write a function that creates a HTML <ul> using a template for every HTML <li>.
 The source of the list should be an array of elements.
 Replace all placeholders marked with –{…}– with the value of the corresponding property of the object.*/
function generateList(){
    var ul = document.createElement('ul');

    for(var ind in people){
        var li = document.createElement('li');
        li.innerHTML = format(template, people[ind]);
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
};

function format(string, person){
    return string.replace(/\-{(\w+)\}-/g, function (match, prop) {
        return person[prop] || '';
    });
}

var people = [
    {name: 'Pesho', age: 24},
    {name: 'Gosho', age: 20},
    {name: 'Liubo', age: 25},
    {name: 'Ivo', age: 36},
    {name: 'Misho', age: 31}
];
var template = document.getElementById('list-item').innerHTML;

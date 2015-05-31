/*Try typeof on all variables you created.*/

var string='string';
var int=25;
var float=25.25;
var array=[10,20,30,40,50];
var object={name:'JavaScript',homeWork:1};
var nullValue=null;
var undefinedValue=undefined;

var variables=[undefinedValue,nullValue,object,array,float,int,string];

for(var variable in variables){
    console.log(variables[variable]+' is '+ typeof (variables[variable]));
}
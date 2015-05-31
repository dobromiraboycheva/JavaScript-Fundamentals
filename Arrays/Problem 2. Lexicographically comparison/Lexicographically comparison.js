/*Write a script that compares two char arrays lexicographically (letter by letter).*/

Array.prototype.lexicographicallyCompration=function(array){
    for(var i=0;i<Math.min(this.length,array.length);i++){
        if(array[i]!==this[i]){
            return this[i]<array[i]?-1:1;
        }
    }
    if(this.length!=array.length){
        this.length<array.length?-1:1;
    }
    return 0;
}

var first='abcde'.split('');
var second='abcde'.split('');
console.log("first='abcde'");
console.log("second='abcde'");
console.log('result:  '+first.lexicographicallyCompration(second));
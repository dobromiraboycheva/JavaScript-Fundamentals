/**Write a function that formats a string using placeholders.
 The function should work with up to 30 placeholders and all types. */
function format(){
    var args = arguments;
    var string = args[0];

    for(var ind = 1; ind < args.length; ind++){
        var placeholder ='{' + (ind - 1) + '}';
        while(string.indexOf(placeholder) > -1) {
            string = string.replace(placeholder, args[ind]);
        }
    }

    return string;
}

console.log("format('{0}, {1}, {0}  {2}',  1, 'Pesho', 'Gosho'");
console.log(format('{0}, {1}, {0}  {2}',  1, 'Pesho', 'Gosho'));
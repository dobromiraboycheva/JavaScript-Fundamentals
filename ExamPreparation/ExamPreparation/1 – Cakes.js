function solve(params) {
    var s = parseInt(params[0]), c1 =  parseInt(params[1]), c2 =  parseInt(params[2]), c3 =  parseInt(params[3]);
    var answer = 0;
    var currentResult = 0;
    for (var i = 0; i*c1 <= s; i++) {
        for (var j = 0; j * c2 <= s; j++) {
            for (var k = 0; k*c3 <=s; k++) {
                if (i * c1 + j * c2 + k * c3 <= s) {
                    currentResult = i * c1 + j * c2 + k * c3;
                    if (answer < currentResult) {
                        answer = currentResult;
                    }
                }
            }
        }
    }

    console.log(answer);
}
solve(['110',
'13',
'15',
'17'
]);
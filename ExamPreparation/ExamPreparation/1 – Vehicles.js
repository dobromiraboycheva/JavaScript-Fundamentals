function solve(params) {
    var s =parseInt(params[0]);
    var count = 0;
    for (var i = 0; i*3<= s; i++) {
        for (var j = 0; j*4 <= s; j++) {
            for (var k = 0; k*10<= s; k++) {
                if (i * 3 + j * 4 + k * 10 === s) {
                    count++;
                }
            }
        }
    }

    console.log(count);
}

solve(['150']);
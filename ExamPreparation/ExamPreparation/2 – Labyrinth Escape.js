function Solve(param) {
    var size = param[0].split(' ').map(Number),
        rows = size[0],
        cols = size[1],
        position = param[1].split(' ').map(Number),

        row = position[0],
        col = position[1],
        line = param.slice(2).map(function (row) {
           return row.split('');
        }),
        dir = {
            l: {
                row: 0,
                col: -1
            },
            r: {
                row: 0,
                col: 1
            },
            u: {
                row: -1,
                col: 0
            },
            d: {
                row: 1,
                col: 0
            }
        },
        used = {},
        sum=0,
        count = 0;
   // console.log(rows + ' ' + cols);
   // console.log(row + ' ' + col);
    function getValue(row, col) {
        return row*cols + col + 1;
    }
    function inRange(value, border) {
        return 0 <= value && value < border;
    }
    function hash(row, col, cols) {
        return row * cols + col;
    }
    while (true) {
        if(used[hash(row,col,cols)]){
            return 'lost ' + count;
        }
        if (!inRange(row, rows) || !inRange(col, cols)) {
            return 'out ' + sum;
        }
        //console.log(line[row][col]);
        //console.log(getValue(row, col));
        used[hash(row, col, cols)] = true;
        count++;
        sum += getValue(row, col);
       //console.log(sum);
      //  console.log(count);
        var diraction = line[row][col];
        var d = dir[diraction];
        row += d.row;
        col += d.col;
    }
}

var test1args = [
 "3 4",
 "1 3",
 "lrrd",
 "dlll",
 "rddd"];
var test2args = [
 "5 8",
 "0 0",
 "rrrrrrrd",
 "rludulrd",
 "durlddud",
 "urrrldud",
 "ulllllll"];
var test3args = [
 "5 8",
 "0 0",
 "rrrrrrrd",
 "rludulrd",
 "lurlddud",
 "urrrldud",
 "ulllllll"];
console.log(Solve(test1args));
console.log(Solve(test2args));
console.log(Solve(test3args));

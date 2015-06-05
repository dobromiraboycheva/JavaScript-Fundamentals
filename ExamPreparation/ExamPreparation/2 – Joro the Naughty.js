function Solve(param) {
    var size = param[0].split(' ').map(Number),
        rows = size[0],
        cols = size[1],
        jumps=size[2],
        position = param[1].split(' ').map(Number),
        row = position[0],
        col = position[1],
        line = param.slice(2),
        dirs = [line.lenght],
        used = {},
        sum = 0,
        count = 0;
    for (var i = 0; i < line.lenght; i++) {
        var dir = line[i].split(' ');
        dirs[i] = {
            row: parseInt(dir[0]),
            col:parseInt(dir[1])
        };
    }
    var dir = 0;
    // console.log(rows + ' ' + cols);
    // console.log(row + ' ' + col);
    function getValue(row, col) {
        return row * cols + col + 1;
    }
    function inRange(value, border) {
        return 0 <= value && value < border;
    }
    function hash(row, col, cols) {
        return row * cols + col;
    }
    while (true) {
        if (used[hash(row, col, cols)]) {
            return 'caught ' + count;
        }
        if (!inRange(row, rows) || !inRange(col, cols)) {
            return 'escaped ' + sum;
        }
        //console.log(line[row][col]);
        //console.log(getValue(row, col));
        used[hash(row, col, cols)] = true;
        count++;
        sum += getValue(row, col);
        //console.log(sum);
        //  console.log(count);
      
        row += dirs[dir].row;
        col += dirs[dir].col;
        dir++;
        dir %= dirs.length;
    }
}

var test = [
'6 7 3',
'0 0',
'2 2',
'-2 2',
    '3 -1',
];
console.log(Solve(test));
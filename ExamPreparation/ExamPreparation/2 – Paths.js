function Solve(param) {
    var size = param[0].split(' ').map(Number);
    var rows = size[0], cols =size[1];
    var lab = param.slice(1).map(function (line) {
        return line.split(' ');
    });
    var visited={};
    var border=Math.max(rows,cols);
    var dir = {
        dr: {
            row: +1,
            col: +1
        },
        ur: {
            row: -1,
            col: +1
        },

        ul: {
            row: -1,
            col: -1
        },
        dl: {
            row: +1,
            col: -1
        }
    };
    var row, col, sum = 0;
    function inRange(value, border) {
        return 0 <= value && value < border;
    }
    function getValue(row, col) {
        return (1 << row) + col;
    }
    row = 0;
    col = 0;
    while (true) {
        if (!inRange(row, rows) || !inRange(col, cols)) {
            return 'successed with ' + sum;
        }
        if (visited[row * border + col]) {
            return 'failed at (' + row + ', ' + col + ')';
        }
        visited[row * border + col] = true;
        sum += getValue(row, col);
        var d = lab[row][col];
        row += dir[d].row;
        col += dir[d].col;
    }
}

var args = [
  '3 5',
  'dr dl dr ur ul',
  'dr dr ul ur ur',
  'dl dr ur dl ur'
];
console.log(Solve(args));
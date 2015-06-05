function Solve(param) {
    /*var dir =[ {},
        {
           row: -2,
           col: 1
        },
        {
           row: -1,
           col: 2
        },
        {
           row: 1,
           col: 2
        },
        {
           row: 2,
           col: 1
        },
        {
           row: 2,
           col: -1
       },
       {
           row: 1,
           col: -2
        },
        {
           row: -1,
           col: -2
        },
        {
           row: -2,
           col: -1
       }
   ],*/
    var dir = {
        1: {
            row: -2,
            col: 1
        },
        2: {
            row: -1,
            col: 2
        },
        3: {
            row: 1,
            col: 2
        },
        4: {
            row: 2,
            col: 1
        },
        5: {
            row: 2,
            col: -1
        },
        6: {
            row: 1,
            col: -2
        },
        7: {
            row: -1,
            col: -2
        },
        8: {
            row: -2,
            col: -1
        }
    },
    size = param[0].split(' ').map(Number),
    rows = size[0], cols = size[1],
    field = param.slice(1).map(function (row) {
        return row.split('').map(Number);
    }),
    row = rows - 1,
    col = cols - 1,
    jumps,
    sum,
    used = {},
    line = [];
    //?? не е необходимо
    /*for (var c = 0; c < cols; c++) {
        var value = c.toString();
        while (value.length < 5) {
            value = ' ' + value;
        }
        line.push(value);
    }
    */
    function getValue(row, col) {
        return (1 << row) - col;
    }
    function hash(row, col, cols) {
        return row * cols + col;
    }
    function inRane(value, border) {
        return 0 <= value && value < border;
    }
    jumps = 0;
    sum = 0;
    while (true) {
        if(used[hash(row,col,cols)]){
            return 'Sadly the horse is doomed in ' + jumps + ' jumps';
        }
        if (!inRane(row, rows) || !inRane(col, cols)) {
            return 'Go go Horsy! Collected ' + sum + ' weeds';
        }
        used[hash(row, col, cols)] = true;
        jumps++;
        sum += getValue(row, col);
        var dirIndex = field[row][col],
            d = dir[dirIndex];
        row += d.row;
        col += d.col;
    }
}

var testargs = [
  '3 5',
  '54561',
  '43328',
  '52388',
];

var args = [
  '3 5',
  '54361',
  '43326',
  '52188',
];

console.log(Solve(args));
console.log(Solve(testargs));
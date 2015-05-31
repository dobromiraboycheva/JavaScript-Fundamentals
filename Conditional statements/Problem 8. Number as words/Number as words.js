/*Write a script that converts a number in the range [0�999] to words, corresponding to its English pronunciation. */

function numbersAsWords(number){
    var text = '';
    var hundreds = Math.floor(number / 100) % 10;
    var tens = Math.floor(number / 10) % 10;
    var ones = number % 10;

    if(!hundreds && !tens && !ones){
        return 'zero';
    }

    if(hundreds){
        text += digits(hundreds) + ' hundred';
    }

    if(tens || ones){
        if(text.length){
            text += ' and ';
        }

        if(tens){
            if(tens === 1){
                return text + teen(tens * 10 + ones);
            }
            text += ten(tens);
        }

        if(ones){
            if(tens){
                text += '-';
            }

            text += digits(ones);
        }
    }

    return text;
}

function digits (digit) {
    switch(digit){
        case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        default: return '';
    }
};

function ten (digit) {
    switch(digit){
        case 2: return 'twenty';
        case 3: return 'thirty';
        case 4: return 'forty';
        case 5: return 'fifty';
        case 6: return 'sixty';
        case 7: return 'seventy';
        case 8: return 'eighty';
        case 9: return 'ninety';
        default: return '';
    }
};

function teen (digit) {
    switch(digit){
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';
        default: return '';
    }
};
var numbers = [0,9,11,41,897];

for(var ind = 0; ind < numbers.length; ind++){
    console.log(numbers[ind] + '\t' + numbersAsWords(numbers[ind]));
}
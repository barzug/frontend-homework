'use strict';

const roman = function (str) {
    if (isNumeric(str)) {
        return toRomanNumeral(str);
    }

    if (/^[MDCLXVI ]*$/i.test(str)) {
        return fromRomanNumeral(str)
    }

    return null
};


function toRomanNumeral(num) {
    let result = '';

    for (let i in lookup) {
        while (num >= lookup[i]) {
            result += i;
            num -= lookup[i];
        }
    }
    return result;
}

function fromRomanNumeral(str) {
    str = str.trim().toUpperCase();
    console.log(str);

    let result = 0;
    for (let i in lookup) {
        while (str.indexOf(i) === 0) {
            result += lookup[i];
            str = str.replace(i, '');
        }
    }

    if (str.length !== 0) {
        return null;
    }

    return result;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

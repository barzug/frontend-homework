'use strict';

const roman = str => {
    if (isNumeric(str)) {
        return toRomanNumeral(str);
    }

    if (isRoman(str)) {
        return fromRomanNumeral(str)
    }

    return null
};


const toRomanNumeral = num => {
    let result = '';

    Object.keys(lookup).forEach(i => {
        while (num >= lookup[i]) {
            result += i;
            num -= lookup[i];
        }
    });

    return result;
};

const fromRomanNumeral = str => {
    let result = 0;

    str.trim().toUpperCase().split('').reduce((prev, current) => {
        result += lookup[prev] < lookup[current] ? lookup[current] - 2 * lookup[prev] : lookup[current];
        return current;
    }, "M");

    return result;
};

const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

const isRoman = str => /^(\s*)(M{0,3})(D?C{0,3}|C[DM])(L?X{0,3}|X[LC])(V?I{0,4}|I[VX])(\s*)$/i.test(str);

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

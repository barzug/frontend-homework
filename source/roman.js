'use strict';

const ROMAN_LOOKUP = {
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

const roman = str => {

    const toRomanNumeral = num => {
        let result = '';

        Object.keys(ROMAN_LOOKUP).forEach(i => {
            while (num >= ROMAN_LOOKUP[i]) {
                result += i;
                num -= ROMAN_LOOKUP[i];
            }
        });

        return result;
    };

    const fromRomanNumeral = str => {
        let result = 0;

        str.trim().toUpperCase().split('').reduce((prev, current) => {

            if (ROMAN_LOOKUP[prev] < ROMAN_LOOKUP[current]) {
                result -= 2 * ROMAN_LOOKUP[prev];
            }
            result += ROMAN_LOOKUP[current];

            return current;
        }, "M");

        return result;
    };

    const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

    const isRoman = str => /^(\s*)(M{0,3})(D?C{0,3}|C[DM])(L?X{0,3}|X[LC])(V?I{0,4}|I[VX])(\s*)$/i.test(str);


    if (isNumeric(str)) {
        return toRomanNumeral(str);
    }

    if (isRoman(str)) {
        return fromRomanNumeral(str)
    }

    return null
};
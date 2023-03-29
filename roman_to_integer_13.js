// Leetcode 13 : Roman to Integer

let s = "LVIII"

let romanToInt = function (s) {
    let obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let first = obj[s[i]];
        let second = obj[s[i + 1]];

        if (first < second) {
            result = result + second - first;
            i++;
        } else {
            result = result + first;
        }
    }
    return result;


};

let answer = romanToInt(s);
console.log(answer);
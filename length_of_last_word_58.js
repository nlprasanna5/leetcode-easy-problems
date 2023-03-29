// Leetcode 58: Length of last word



let s = "   fly me   to   the moon  ";

let lengthOfLastWord = function (s) {
    if (s.length === 0) {
        return 0;
    }
    let array = s.trim().split(' ');

    return array[array.length - 1].length;
};

let answer = lengthOfLastWord(s);
console.log(answer);
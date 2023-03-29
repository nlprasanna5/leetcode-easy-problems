// Leetcode 28: Find the index of First Occurence in a string


let haystack = "sadbutsad"; 
let needle = "sad";

var strStr = function (haystack, needle) {

    if (needle === "") {
        return 0;
    }
    if (!haystack || !needle) {
        return -1;
    }

    for (let i = 0; i < haystack.length; i++) {
        let answer = haystack.slice(i, i + needle.length);
        if (answer == needle) {
            return i;
        }
    }
    return -1;

};

let answer=strStr(haystack,needle);
console.log(answer);
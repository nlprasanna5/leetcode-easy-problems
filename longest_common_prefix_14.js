//  Leetcode 14 : Longest common prefix;


let strs = ["flower", "flow", "flight"];


var longestCommonPrefix = function (strs) {
    let answer = "";
    if (strs === null || strs.length === 0) {
        return answer;

    }
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return answer;
            }
        }
        answer = answer + char;
    }

    return answer;

};

let answer = longestCommonPrefix(strs);
console.log(answer);
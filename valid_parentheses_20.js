// Leetcode 20 : Valid parentheses


let s = "()[]{}";

let isValid = function (s) {
    let hashMap = { '(': ')', '{': '}', '[': ']' };
    let stack = [];
    for (let p of s) {
        if (hashMap[p]) {
            stack.push(hashMap[p]);
        } else if (stack.length > 0 && stack[stack.length - 1] === p) {
            stack.pop();
        } else {
            return false;
        }

    }
    return stack.length === 0;

};

let answer = isValid(s);
console.log(answer);
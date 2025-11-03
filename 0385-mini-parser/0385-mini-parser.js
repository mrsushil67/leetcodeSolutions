/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
    if (s[0] !== '[') {
        return new NestedInteger(parseInt(s, 10));
    }

    const stack = [];
    let num = '';
    let negative = false;

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (ch === '[') {
            stack.push(new NestedInteger());
        } 
        else if (ch === '-') {
            negative = true;
        } 
        else if (ch >= '0' && ch <= '9') {
            num += ch;
        } 
        else if (ch === ',' || ch === ']') {
            if (num.length > 0) {
                let val = parseInt(num, 10);
                if (negative) val = -val;
                stack[stack.length - 1].add(new NestedInteger(val));
                num = '';
                negative = false;
            }

            if (ch === ']' && stack.length > 1) {
                const ni = stack.pop();
                stack[stack.length - 1].add(ni);
            }
        }
    }

    return stack.pop();
};
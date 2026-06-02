/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let source = s.split("").sort().join("");
    let target = t.split("").sort().join("");

    return source === target;
};
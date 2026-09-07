/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const trimmedStr = s.trim();
    const lastSpaceIndex = trimmedStr.lastIndexOf(' ');
    return trimmedStr.length - 1 - lastSpaceIndex;
};
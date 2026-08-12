/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = x<0 ? -1 : 1;
    const reversedNum = parseInt(Math.abs(x).toString().split('').reverse().join(''))*sign;
    if(reversedNum < Math.pow(-2,31) || reversedNum > Math.pow(2,31) -1){
        return 0;
    }
    return reversedNum;
};

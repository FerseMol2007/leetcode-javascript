var isPalindrome = function(x) {
   
    if (x < 0) return false;
    
    const reversed = x.toString().split('').reverse().join('');
    
    return x.toString() === reversed;
};
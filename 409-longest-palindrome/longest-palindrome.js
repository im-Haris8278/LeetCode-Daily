/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) 
{
    let charCount = {};
    
    for (let char of s) 
    {
        if (charCount[char] === undefined) 
        {
            charCount[char] = 1;
        } 
        else 
        {
            charCount[char]++;
        }
    }
    
    let length = 0;
    let hasOddCount = false;
    
    for (let count of Object.values(charCount)) 
    {
        if (count % 2 === 0) 
        {
            length += count;
        } 
        else 
        {
            length += count - 1;
            hasOddCount = true;
        }
    }
    
    if (hasOddCount) 
    {
        length += 1;
    }
    
    return length;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function(s, k) 
{
    const dp = new Array(128).fill(0);
    let maxLength = 0;
    
    for (const char of s) 
    {
        const ascii = char.charCodeAt(0);
        let maxPrevLength = 0;
        
        for (let i = Math.max(0, ascii - k); i <= Math.min(127, ascii + k); i++) 
        {
            maxPrevLength = Math.max(maxPrevLength, dp[i]);
        }
        
        dp[ascii] = maxPrevLength + 1;
        
        maxLength = Math.max(maxLength, dp[ascii]);
    }
    
    return maxLength;
};

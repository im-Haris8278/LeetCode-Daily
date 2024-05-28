/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost)
{
    let start = 0;
    let currentCost = 0;
    let maxLength = 0;

    for (let end = 0; end < s.length; end++)
    {
        currentCost += Math.abs(s[end].charCodeAt() - t[end].charCodeAt());

        while (currentCost > maxCost)
        {
            currentCost -= Math.abs(s[start].charCodeAt() - t[start].charCodeAt());
            start++;
        }

        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) 
{
    let left = 0;
    let right = Math.floor(Math.sqrt(c));

    while (left <= right) 
    {
        const currentSum = left * left + right * right;

        if (currentSum === c) 
        {
            return true;
        } 
        else if (currentSum < c) 
        {
            left++;
        } 
        else 
        {
            right--;
        }
    }

    return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(nums, k) 
{
    let n = nums.length;
    let flipCount = 0;
    let isFlipped = new Array(n).fill(0);
    let currentFlips = 0;

    for (let i = 0; i < n; i++) 
    {
        if (i >= k) 
        {
            currentFlips ^= isFlipped[i - k];
        }

        if ((nums[i] ^ currentFlips) == 0) 
        {
            if (i + k > n) 
            {
                return -1;
            }

            flipCount++;
            currentFlips ^= 1;
            isFlipped[i] = 1;
        }
    }

    return flipCount;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) 
{
    let count = 0;
    let prefixSum = 0;
    let prefixCount = new Map();
    prefixCount.set(0, 1);

    for (let num of nums)
    {
        prefixSum += (num % 2 === 0 ? 0 : 1);

        if (prefixCount.has(prefixSum - k)) 
        {
            count += prefixCount.get(prefixSum - k);
        }

        if (prefixCount.has(prefixSum)) 
        {
            prefixCount.set(prefixSum, prefixCount.get(prefixSum) + 1);
        } 
        else 
        {
            prefixCount.set(prefixSum, 1);
        }
    }

    return count
};
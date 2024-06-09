/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) 
{
    let prefixSum = 0;
    let count = 0;
    let remainderCount = {0: 1};

    for (let num of nums)
    {
        prefixSum += num;
        let remainder = prefixSum % k;

        if (remainder < 0)
        {
            remainder += k;
        }

        if (remainderCount[remainder] !== undefined)
        {
            count += remainderCount[remainder];
        }

        if (remainderCount[remainder] === undefined)
        {
            remainderCount[remainder] = 1;
        } 
        else 
        {
            remainderCount[remainder]++;
        }
    }

    return count;
};
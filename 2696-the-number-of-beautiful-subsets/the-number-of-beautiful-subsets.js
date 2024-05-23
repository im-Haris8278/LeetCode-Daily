/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) 
{
    let result = 0;

    const backtrack = (index, subset) => {
        if (index === nums.length)
        {
            if (subset.length > 0)
            {
                result++;
            }
            return;
        }

        let valid = true;
        for (let num of subset)
        {
            if (Math.abs(num - nums[index]) === k)
            {
                valid = false;
                break;
            }
        }

        if (valid)
        {
            subset.push(nums[index]);
            backtrack(index + 1, subset);
            subset.pop();
        }

        backtrack(index + 1, subset);
    };

    backtrack(0, []);

    return result;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) 
{
    nums.sort((a, b) => a - b);

    for (let x = 0; x <= nums.length; x++)
    {
        let count = 0;
        for (let i = 0; i < nums.length; i++)
        {
            if (nums[i] >= x)
            {
                count = nums.length - i;
                break;
            }
        }

        if (count === x)
        {
            return x;
        }
    }

    return -1;
};
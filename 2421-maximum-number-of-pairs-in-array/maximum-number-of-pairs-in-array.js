/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let countMap = {};
    
    for (let num of nums) 
    {
        if (countMap[num] == undefined) 
        {
            countMap[num] = 0;
        }

        countMap[num]++;
    }
    
    let pairs = 0;
    let leftovers = 0;
    
    for (let key in countMap) 
    {
        let count = countMap[key];
        pairs += Math.floor(count / 2);
        leftovers += count % 2;
    }
    
    return [pairs, leftovers];
};
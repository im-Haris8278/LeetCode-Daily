/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) 
{
    const canMakeBouquets = (days) => {
        let bouquets = 0;
        let flowers = 0;
        
        for (let bloom of bloomDay) 
        {
            if (bloom <= days) 
            {
                flowers++;
                if (flowers == k) 
                {
                    bouquets++;
                    flowers = 0;
                }
            } 
            else 
            {
                flowers = 0;
            }
        }
        
        return bouquets >= m;
    };
    
    if (bloomDay.length < m * k)
    {
        return -1;
    }
    
    let left = 1;
    let right = Math.max(...bloomDay);
    
    while (left < right) 
    {
        let mid = Math.floor((left + right) / 2);
        
        if (canMakeBouquets(mid)) 
        {
            right = mid;
        } 
        else 
        {
            left = mid + 1;
        }
    }
    
    return left;
};

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) 
{
    const n = customers.length;

    let baseSatisfied = 0;
    for (let i = 0; i < n; i++) 
    {
        if (grumpy[i] === 0) 
        {
            baseSatisfied += customers[i];
        }
    }

    let maxAdditional = 0;
    let currentAdditional = 0;

    for (let i = 0; i < minutes; i++) 
    { 
        if (grumpy[i] === 1) 
        {
            currentAdditional += customers[i];
        }
    }

    maxAdditional = currentAdditional; 

    for (let i = minutes; i < n; i++) 
    {
        if (grumpy[i - minutes] === 1) 
        {
            currentAdditional -= customers[i - minutes];
        }
        
        if (grumpy[i] === 1) 
        {
            currentAdditional += customers[i];
        }
        
        maxAdditional = Math.max(maxAdditional, currentAdditional);
    }

    return baseSatisfied + maxAdditional;
};

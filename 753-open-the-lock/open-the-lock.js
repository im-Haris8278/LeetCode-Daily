/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) 
{
    const deadSet = new Set(deadends);
    const visited = new Set();
    const queue = [['0000', 0]];
    
    if (deadSet.has('0000'))
    {
        return -1;
    }
    
    if (target === '0000')
    {
        return 0;
    }
    
    while (queue.length > 0) 
    {
        const [current, turns] = queue.shift();
        
        for (let i = 0; i < 4; i++) 
        {
            for (let d of [-1, 1]) 
            {
                const newDigit = (Number(current[i]) + d + 10) % 10;
                const next = current.slice(0, i) + newDigit + current.slice(i + 1);
                
                if (next === target) 
                {
                    return turns + 1;
                }
                
                if (!deadSet.has(next) && !visited.has(next)) 
                {
                    visited.add(next);
                    queue.push([next, turns + 1]);
                }
            }
        }
    }
    
    return -1;
};
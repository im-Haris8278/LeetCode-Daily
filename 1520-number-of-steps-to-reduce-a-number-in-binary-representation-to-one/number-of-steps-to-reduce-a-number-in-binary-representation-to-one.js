/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) 
{
    let steps = 0;
    
    while (s !== "1") 
    {
        if (s[s.length - 1] === '0') 
        {
            s = s.slice(0, -1);
        } 
        else 
        {
            let carry = 1;
            let newS = "";
            
            for (let i = s.length - 1; i >= 0; i--) 
            {
                if (s[i] === '1' && carry === 1) 
                {
                    newS = '0' + newS;
                } 
                else 
                {
                    newS = (parseInt(s[i]) + carry) + newS;
                    carry = 0;
                }
            }
            
            if (carry === 1) 
            {
                newS = '1' + newS;
            }
            
            s = newS;
        }
        
        steps++;
    }
    
    return steps;
};

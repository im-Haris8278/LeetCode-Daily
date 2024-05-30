/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) 
{
    let n = arr.length;
    let prefixXOR = new Array(n + 1).fill(0);
    
    for (let i = 0; i < n; i++) 
    {
        prefixXOR[i + 1] = prefixXOR[i] ^ arr[i];
    }
    
    let count = 0;
    
    for (let j = 0; j < n; j++) 
    {
        for (let k = j + 1; k < n; k++) 
        {
            if (prefixXOR[j] === prefixXOR[k + 1]) 
            {
                count += (k - j);
            }
        }
    }
    
    return count;
};
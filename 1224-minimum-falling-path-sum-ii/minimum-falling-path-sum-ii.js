/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function(grid) 
{
    const n = grid.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    for (let j = 0; j < n; j++) 
    {
        dp[0][j] = grid[0][j];
    }

    for (let i = 1; i < n; i++) 
    {
        let min1 = Infinity, min2 = Infinity;
        let min1Index = -1;

        for (let j = 0; j < n; j++) 
        {
            if (dp[i - 1][j] < min1) 
            {
                min2 = min1;
                min1 = dp[i - 1][j];
                min1Index = j;
            } 
            else if (dp[i - 1][j] < min2) 
            {
                min2 = dp[i - 1][j];
            }
        }

        for (let j = 0; j < n; j++) 
        {
            if (j === min1Index) 
            {
                dp[i][j] = grid[i][j] + min2;
            } 
            else 
            {
                dp[i][j] = grid[i][j] + min1;
            }
        }
    }

    return Math.min(...dp[n - 1]);
};
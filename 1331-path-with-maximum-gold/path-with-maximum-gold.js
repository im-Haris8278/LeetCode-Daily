/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) 
{
    let rows = grid.length;
    let cols = grid[0].length;
    let maxGold = 0;

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    const dfs = (r, c, currentGold) => {
        maxGold = Math.max(maxGold, currentGold);

        let originalGold = grid[r][c];
        grid[r][c] = 0;

        for (let [dr, dc] of directions)
        {
            let newRow = r + dr;
            let newCol = c + dc;

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] > 0) 
            {
                dfs(newRow, newCol, currentGold + grid[newRow][newCol]);
            }

        }
        
        grid[r][c] = originalGold;
    };

    for (let r = 0; r < rows; r++)
    {
        for (let c = 0; c < cols; c++)
        {
            if (grid[r][c] > 0)
            {
                dfs(r, c, grid[r][c]);
            }
        }
    }

    return maxGold;
};
/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) 
{
    const m = grid.length;
    const n = grid[0].length;

    for (let i = 0; i < m; i++)
    {
        if (grid[i][0] === 0)
        {
            toggleRow(grid, i);
        }
    }

    for (let j = 0; j < n; j++)
    {
        const countOnes = count1s(grid, j);
        if (countOnes < m - countOnes)
        {
            toggleColumn(grid, j);
        }
    }

    let score = 0;
    for (let i = 0; i < m; i++)
    {
        let rowValue = 0;
        for (let j = 0; j < n; j++)
        {
            rowValue = ((rowValue << 1) + grid[i][j]);
        }

        score += rowValue;
    }

    return score;
};

function toggleRow(grid, row)
{
    const n = grid[0].length;
    for (let j = 0; j < n; j++)
    {
        grid[row][j] ^= 1;
    }
}

function toggleColumn(grid, col)
{
    const m = grid.length;
    for (let i = 0; i < m; i++)
    {
        grid[i][col] ^= 1;
    }
}

function count1s(grid, col)
{
    let count = 0;
    const m = grid.length;
    for (let i = 0; i < m; i++)
    {
        count += grid[i][col];
    }

    return count;
}
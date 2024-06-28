/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) 
{
    const degree = new Array(n).fill(0);

    for (const [city1, city2] of roads) 
    {
        degree[city1]++;
        degree[city2]++;
    }

    const sortedCities = [...Array(n).keys()].sort((a, b) => degree[b] - degree[a]);

    let totalImportance = 0;

    for (let i = 0; i < n; i++) 
    {
        const city = sortedCities[i];
        const importance = n - i;
        totalImportance += degree[city] * importance;
    }

    return totalImportance;
};
class Solution {
public:
    vector<vector<int>> largestLocal(vector<vector<int>>& grid) 
    {
        int rows = grid.size();
        int cols = grid[0].size();
        vector<vector<int>> maxLocal(rows - 2, vector<int>(cols - 2, 0));
        
        for (int i = 1; i < rows - 1; ++i) 
        {
            for (int j = 1; j < cols - 1; ++j) 
            {
                int maxVal = max({grid[i-1][j-1], grid[i-1][j], grid[i-1][j+1], grid[i][j-1], grid[i][j], grid[i][j+1], grid[i+1][j-1], grid[i+1][j], grid[i+1][j+1]});
                maxLocal[i-1][j-1] = maxVal;
            }
        }
        
        return maxLocal;
    }
};
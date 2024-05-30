class Solution {
public:
    int orangesRotting(vector<vector<int>>& grid) {
        int rows = grid.size();
        int cols = grid[0].size();

        queue<pair<int, int>> rottenOranges;
        int freshCount = 0;

        for (int i = 0; i < rows; ++i)
        {
            for (int j = 0; j < cols; ++j)
            {
                if (grid[i][j] == 2)
                {
                    rottenOranges.push({i, j});
                }
                else if (grid[i][j] == 1)
                {
                    ++freshCount;
                }
            }
        }

        int minutes = 0;
        vector<pair<int, int>> directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

        while (!rottenOranges.empty() && freshCount > 0)
        {
            int size = rottenOranges.size();
            for (int i = 0; i < size; ++i)
            {
                int x = rottenOranges.front().first;
                int y = rottenOranges.front().second;
                rottenOranges.pop();

                for (const auto& dir : directions)
                {
                    int newX = x + dir.first;
                    int newY = y + dir.second;

                    if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY] == 1) 
                    {
                        grid[newX][newY] = 2;
                        rottenOranges.push({newX, newY});
                        --freshCount;
                    }
                }
            }

            if (!rottenOranges.empty())
            {
                ++minutes;
            }
        }

        return (freshCount == 0) ? minutes : -1;
    }
};
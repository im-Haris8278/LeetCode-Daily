class Solution {
public:
    int nearestExit(vector<vector<char>>& maze, vector<int>& entrance) {
        int m = maze.size();
        int n = maze[0].size();
        
        vector<vector<int>> dirs = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        
        queue<pair<int, int>> q;
        q.push({entrance[0], entrance[1]});
        maze[entrance[0]][entrance[1]] = '+';
        
        int steps = 0;
        
        while (!q.empty()) 
        {
            int size = q.size();
            while (size--) 
            {
                auto [x, y] = q.front();
                q.pop();
                
                if ((x != entrance[0] || y != entrance[1]) && (x == 0 || y == 0 || x == m - 1 || y == n - 1))
                {
                    return steps;
                }
                
                for (auto& dir : dirs) 
                {
                    int nx = x + dir[0];
                    int ny = y + dir[1];
                    
                    if (nx >= 0 && nx < m && ny >= 0 && ny < n && maze[nx][ny] == '.') 
                    {
                        maze[nx][ny] = '+';
                        q.push({nx, ny});
                    }
                }
            }

            steps++;
        }
        
        return -1;
    }
};
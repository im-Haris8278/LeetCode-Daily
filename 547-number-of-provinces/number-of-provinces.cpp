class Solution {
public:
    int findCircleNum(vector<vector<int>>& isConnected) {
        int n = isConnected.size();
        int provinces = 0;
        vector<bool> visited(n, false);

        for (int i = 0; i < n; ++i) 
        {
            if (!visited[i]) 
            {
                dfs(isConnected, i, visited);
                ++provinces;
            }
        }

        return provinces;
    }

private:
    void dfs(const vector<vector<int>>& isConnected, int node, vector<bool>& visited) 
    {
        stack<int> s;
        s.push(node);

        while (!s.empty()) 
        {
            int current = s.top();
            s.pop();

            if (!visited[current]) 
            {
                visited[current] = true;

                for (int neighbor = 0; neighbor < isConnected.size(); ++neighbor) 
                {
                    if (isConnected[current][neighbor] == 1 && !visited[neighbor]) 
                    {
                        s.push(neighbor);
                    }
                }
            }
        }
    }
};
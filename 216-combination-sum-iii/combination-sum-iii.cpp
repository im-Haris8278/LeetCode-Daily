class Solution {
public:
    vector<vector<int>> combinationSum3(int k, int n) {
        vector<vector<int>> res;
        vector<int> path;
        dfs(res, path, 1, k, n);
        return res;
    }
    
private:
    void dfs(vector<vector<int>>& res, vector<int>& path, int start, int k, int n)
    {
        if (k == 0 && n == 0)
        {
            res.push_back(path);
            return;
        }

        if (k == 0 || n < 0)
        {
            return;
        }

        for (int i = start; i <= 9; i++)
        {
            path.push_back(i);
            dfs(res, path, i + 1, k - 1, n - i);
            path.pop_back();
        }
    }
};
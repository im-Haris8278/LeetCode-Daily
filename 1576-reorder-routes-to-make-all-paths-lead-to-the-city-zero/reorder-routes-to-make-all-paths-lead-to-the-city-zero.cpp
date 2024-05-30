class Solution {
public:
    int minReorder(int n, vector<vector<int>>& connections) {
        unordered_map<int, vector<pair<int, bool>>> graph;
        
        for (const auto& connection : connections) 
        {
            int from = connection[0];
            int to = connection[1];

            graph[from].emplace_back(to, true);
            graph[to].emplace_back(from, false);
        }
        
        int result = 0;
        unordered_set<int> visited;
        stack<int> dfsStack;

        dfsStack.push(0);

        while (!dfsStack.empty()) 
        {
            int current = dfsStack.top();
            dfsStack.pop();
            visited.insert(current);

            for (const auto& neighbor : graph[current]) 
            {
                int nextNode = neighbor.first;
                bool isForward = neighbor.second;

                if (visited.find(nextNode) == visited.end()) 
                {
                    if (isForward) 
                    {
                        result++;
                    }
                    
                    dfsStack.push(nextNode);
                }
            }
        }

        return result;
    }
};
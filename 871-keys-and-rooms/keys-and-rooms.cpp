class Solution {
public:
    bool canVisitAllRooms(vector<vector<int>>& rooms) {
        int n = rooms.size();
        vector<bool> visited(n, false);
        dfs(rooms, 0, visited);

        for (bool roomVisited : visited) 
        {
            if (!roomVisited) 
            {
                return false;
            }
        }

        return true;
    }

private:
    void dfs(const vector<vector<int>>& rooms, int currentRoom, vector<bool>& visited) 
    {
        visited[currentRoom] = true;

        for (int key : rooms[currentRoom]) 
        {
            if (!visited[key]) 
            {
                dfs(rooms, key, visited);
            }
        }
    }
};
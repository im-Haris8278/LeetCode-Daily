bool compareSecond(const vector<int>& a, const vector<int>& b) {
    return a[1] < b[1];
}

class Solution {
public:
    int findMinArrowShots(vector<vector<int>>& points) {
        if (points.size() == 0)
        {
            return 0;
        }

        sort(points.begin(), points.end(), compareSecond);
        int arrows = 1, lastBallonEnd = points[0][1];

        for (int i = 1; i < points.size(); i++) 
        {
            if (points[i][0] > lastBallonEnd) 
            {
                arrows++;
                lastBallonEnd = points[i][1];
            }
        }

        return arrows;
    }
};
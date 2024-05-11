class Solution {
public:
    double mincostToHireWorkers(vector<int>& quality, vector<int>& wage, int k) 
    {
        int n = quality.size();
        
        vector<pair<double, int>> ratios;
        for (int i = 0; i < n; ++i) 
        {
            ratios.push_back({(double)wage[i] / quality[i], quality[i]});
        }
        
        sort(ratios.begin(), ratios.end());
        
        priority_queue<int> maxHeap;
        double minCost = numeric_limits<double>::max();
        int sumQuality = 0;
        
        for (auto& ratio : ratios) 
        {
            double currRatio = ratio.first;
            int currQuality = ratio.second;
            
            sumQuality += currQuality;
            maxHeap.push(currQuality);
            
            if (maxHeap.size() > k) 
            {
                sumQuality -= maxHeap.top();
                maxHeap.pop();
            }
            
            if (maxHeap.size() == k) 
            {
                minCost = min(minCost, sumQuality * currRatio);
            }
        }
        
        return minCost;
    }
};

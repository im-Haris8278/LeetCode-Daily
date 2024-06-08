class Solution {
public:
    bool checkSubarraySum(vector<int>& nums, int k) 
    {
        unordered_map<int, int> mp;
        mp[0] = -1;
        int cumulativeSum = 0;

        for (int i = 0; i < nums.size(); ++i) 
        {
            cumulativeSum += nums[i];
            int mod = k == 0 ? cumulativeSum : cumulativeSum % k;

            if (mp.find(mod) != mp.end()) 
            {
                if (i - mp[mod] > 1)
                {
                    return true;
                }
            } 
            else 
            {
                mp[mod] = i;
            }
        }
        
        return false;
    }
};
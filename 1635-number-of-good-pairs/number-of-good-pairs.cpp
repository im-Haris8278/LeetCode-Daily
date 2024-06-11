class Solution {
public:
    int numIdenticalPairs(vector<int>& nums) 
    {
        unordered_map<int, int> mp;
        int count = 0;

        for (int num : nums)
        {
            count += mp[num]++;
        }

        return count;
    }
};
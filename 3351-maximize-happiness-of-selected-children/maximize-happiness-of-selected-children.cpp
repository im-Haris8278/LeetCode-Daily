class Solution {
public:
    long long maximumHappinessSum(std::vector<int>& happiness, int k) 
    {
        sort(happiness.begin(), happiness.end(), greater<int>());

        int i = 0;
        long long res = 0;

        while (k--) 
        {
            happiness[i] = std::max(happiness[i] - i, 0);
            res += happiness[i++];
        }

        return res;
    }
};
class Solution 
{
public:
    int minIndex(vector<int> nums, int x)
    {
        int l = 0;
        int r = nums.size() - 1;
        int minIdx = nums.size();

        while (l <= r)
        {
            int m = l + (r - l) / 2;
            if (nums[m] == x)
            {
                minIdx = m;
                r = m - 1;
            }
            else if (nums[m] < x)
            {
                l = m + 1;
            }
            else
            {
                r = m - 1;
            }
        }

        return minIdx;
    }

    int maxIndex(vector<int> nums, int x)
    {
        int l = 0;
        int r = nums.size() - 1;
        int maxIdx = -1;
        while (l <= r)
        {
            int m = l + (r - l) / 2;
            if (nums[m] == x)
            {
                maxIdx = m;
                l = m + 1;
            }
            else if (nums[m] > x)
            {
                r = m - 1;
            }
            else
            {
                l = m + 1;
            }
        }

        return maxIdx;
    }

    vector<int> targetIndices(vector<int>& nums, int target) 
    {
        sort(nums.begin(), nums.end());
        int minIdx = minIndex(nums, target);
        int maxIdx = maxIndex(nums, target);

        vector<int> result;
        for (int i = minIdx; i <= maxIdx; ++i)
        {
            result.push_back(i);
        }

        return result;
    }
};
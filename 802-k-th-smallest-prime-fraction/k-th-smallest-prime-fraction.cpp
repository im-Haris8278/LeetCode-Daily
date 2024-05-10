class Solution {
public:
    vector<int> kthSmallestPrimeFraction(vector<int>& arr, int k) 
    {
        int n = arr.size();
        double low = 0, high = 1;

        while (low < high) 
        {
            double mid = (low + high) / 2;
            pair<int, int> res = {0, 1};
            int count = 0, j = 1;

            for (int i = 0; i < n - 1; ++i) 
            {
                while (j < n && arr[i] > mid * arr[j]) 
                {
                    ++j;
                }

                count += n - j;
                if (j < n && res.first * arr[j] < res.second * arr[i]) 
                {
                    res = {arr[i], arr[j]};
                }
            }

            if (count == k) 
            {
                return {res.first, res.second};
            } 
            else if (count < k) 
            {
                low = mid;
            } 
            else 
            {
                high = mid;
            }
        }

        return {};
    }
};

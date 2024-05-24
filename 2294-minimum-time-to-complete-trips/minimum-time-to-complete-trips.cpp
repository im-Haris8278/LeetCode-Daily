class Solution {
public:
    long long minimumTime(vector<int>& time, int totalTrips) 
    {
        long long low = 1;
        long long high = *max_element(time.begin(), time.end()) * (long long)totalTrips;

        while (low < high) 
        {
            long long mid = (low + high) / 2;
            long long trips = 0;
            for (int t : time) 
            {
                trips += mid / t;
                if (trips >= totalTrips) 
                {
                    break;
                }
            }

            if (trips >= totalTrips) 
            {
                high = mid;
            } 
            else 
            {
                low = mid + 1;
            }
        }

        return low;
    }
};
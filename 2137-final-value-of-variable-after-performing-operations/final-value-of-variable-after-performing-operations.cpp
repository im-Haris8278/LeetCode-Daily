class Solution {
public:
    int finalValueAfterOperations(vector<string>& operations) {
        int result = 0;

        for (const string& operation : operations)
        {
            if (operation == "++X" || operation == "X++")
            {
                ++result;
            }

            if (operation == "--X" || operation == "X--")
            {
                --result;
            }
        }

        return result;
    }
};
class Solution {
public:
    int numJewelsInStones(string jewels, string stones) 
    {
        unordered_set<char> jewelSet;

        for (char jewel : jewels)
        {
            jewelSet.insert(jewel);
        }

        int jewelCount = 0;

        for (char stone : stones)
        {
            if (jewelSet.find(stone) != jewelSet.end())
            {
                jewelCount++;
            }
        }

        return jewelCount;
    }
};
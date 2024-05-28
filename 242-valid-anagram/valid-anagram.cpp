class Solution {
public:
    bool isAnagram(string s, string t) 
    {
        if (s.length() != t.length()) 
        {
            return false;
        }
        
        unordered_map<char, int> frequencyS, frequencyT;
        for (char c : s) 
        {
            frequencyS[c]++;
        }

        for (char c : t) 
        {
            frequencyT[c]++;
        }
        
        for (const auto& pair : frequencyS) 
        {
            char c = pair.first;
            if (frequencyT.find(c) == frequencyT.end() || frequencyT[c] != pair.second)
            {
                return false;
            }
        }
        
        return true;
    }
};
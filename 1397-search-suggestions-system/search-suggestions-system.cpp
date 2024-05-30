class Solution {
public:
    vector<vector<string>> suggestedProducts(vector<string>& products, string searchWord) {
        vector<vector<string>> suggestions;
        sort(products.begin(), products.end());

        for (int i = 0; i < searchWord.size(); ++i)
        {
            string prefix = searchWord.substr(0, i + 1);
            vector<string> temp;

            for (const string& product : products) 
            {
                if (temp.size() < 3 && product.substr(0, i + 1) == prefix) 
                {
                    temp.push_back(product);
                }
            }
            
            suggestions.push_back(temp);
        }

        return suggestions;
    }
};
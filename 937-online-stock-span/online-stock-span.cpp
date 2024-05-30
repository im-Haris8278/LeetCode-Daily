class StockSpanner {
private:
    stack<pair<int, int>> stockStack;

public:
    StockSpanner() {}
    
    int next(int price) {
        int span = 1;

        while (!stockStack.empty() && stockStack.top().first <= price) 
        {
            span += stockStack.top().second;
            stockStack.pop();
        }

        stockStack.push({price, span});

        return span;
    }
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner* obj = new StockSpanner();
 * int param_1 = obj->next(price);
 */
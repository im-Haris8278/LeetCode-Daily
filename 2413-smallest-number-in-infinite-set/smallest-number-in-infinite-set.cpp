class SmallestInfiniteSet {
public:
    priority_queue<int, vector<int>, greater<int>> pq;
    vector<int> r;
    SmallestInfiniteSet() {
        for (int i = 1; i <= 1000; i++) {
            pq.push(i);
            r.resize(1001, 0);
        }
    }

    int popSmallest() {
        if (!pq.empty()) {
            int val = pq.top();
            pq.pop();
            r[val] = 1;
            return val;
        }
        return 0;
    }

    void addBack(int num) {
        if (r[num]) {
            pq.push(num);
            r[num] = 0;
        }
    }
};
/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * SmallestInfiniteSet* obj = new SmallestInfiniteSet();
 * int param_1 = obj->popSmallest();
 * obj->addBack(num);
 */
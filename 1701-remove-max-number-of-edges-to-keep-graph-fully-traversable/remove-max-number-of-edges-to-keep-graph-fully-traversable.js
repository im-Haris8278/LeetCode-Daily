/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) 
{
    class UnionFind 
    {
        constructor(n) 
        {
            this.component = Array.from({ length: n + 1 }, (_, index) => index);
            this.distinctComponents = n;
        }

        findComponent(a) 
        {
            if (this.component[a] !== a) 
            {
                this.component[a] = this.findComponent(this.component[a]);
            }
            
            return this.component[a];
        }

        unite(a, b) 
        {
            const rootA = this.findComponent(a);
            const rootB = this.findComponent(b);

            if (rootA === rootB) 
            {
                return false;
            }
            
            this.component[rootA] = rootB;
            this.distinctComponents--;
            
            return true;
        }

        united() 
        {
            return this.distinctComponents === 1;
        }
    }

    edges.sort((a, b) => b[0] - a[0]);

    let edgesAdded = 0;
    let bob = new UnionFind(n);
    let alice = new UnionFind(n);

    for (let edge of edges) 
    {
        let [type, one, two] = edge;
        switch(type) 
        {
            case 3:
                edgesAdded += (bob.unite(one, two) | alice.unite(one, two));
                break;
            case 2:
                edgesAdded += bob.unite(one, two);
                break;
            case 1:
                edgesAdded += alice.unite(one, two);
                break;
        }
    }

    return (bob.united() && alice.united()) ? (edges.length - edgesAdded) : -1;
};

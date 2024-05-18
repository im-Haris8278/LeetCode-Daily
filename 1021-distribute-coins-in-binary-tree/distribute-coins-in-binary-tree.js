/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val, left, right) 
{
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var distributeCoins = function(root) 
{
    let moves = 0;

    function dfs(node) 
    {
        if (node === null)
        {
            return 0;
        }
        
        let leftExcess = dfs(node.left);
        let rightExcess = dfs(node.right);
        let totalExcess = node.val + leftExcess + rightExcess - 1;

        moves += Math.abs(totalExcess);
        return totalExcess;
    }

    dfs(root);
    return moves;
};
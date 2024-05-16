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
 * @return {boolean}
 */
var evaluateTree = function(root) 
{
    if (!root)
    {
        return false;
    }

    if (root.left === null && root.right === null)
    {
        return root.val === 1;
    }

    let leftVal = evaluateTree(root.left);
    let rightVal = evaluateTree(root.right);

    if (root.val === 2)
    {
        return leftVal || rightVal;
    }
    else if (root.val === 3)
    {
        return leftVal && rightVal;
    }

    return false;
};
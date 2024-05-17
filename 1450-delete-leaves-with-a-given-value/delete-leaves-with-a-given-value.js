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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) 
{
    const removeLeaf = (node) => {
        if (node === null) 
        {
            return null;
        }

        node.left = removeLeaf(node.left);
        node.right = removeLeaf(node.right);

        if (node.left === null && node.right === null && node.val === target) 
        {
            return null;
        }

        return node;
    };

    return removeLeaf(root);
};
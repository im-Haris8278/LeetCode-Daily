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
 * @return {TreeNode}
 */
var balanceBST = function(root) 
{
    const inorderTraversal = (node) => {
        if (!node)
        {
            return [];
        }

        return [...inorderTraversal(node.left), node.val, ...inorderTraversal(node.right)];
    };

    const sortedArrayToBST = (nums) => {
        if (!nums.length)
        {
            return null;
        }

        const mid = Math.floor(nums.length / 2);
        const root = new TreeNode(nums[mid]);

        root.left = sortedArrayToBST(nums.slice(0, mid));
        root.right = sortedArrayToBST(nums.slice(mid + 1));

        return root;
    };

    const sortedElements = inorderTraversal(root);

    return sortedArrayToBST(sortedElements);
};
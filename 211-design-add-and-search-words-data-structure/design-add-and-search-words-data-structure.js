var WordDictionary = function() 
{
    this.root = new TrieNode();
};

class TrieNode 
{
    constructor() 
    {
        this.children = {};
        this.isEndOfWord = false;
    }
}

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) 
{
    let node = this.root;
    for (const char of word) 
    {
        if (!node.children[char]) 
        {
            node.children[char] = new TrieNode();
        }
        
        node = node.children[char];
    }

    node.isEndOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) 
{
    return this.searchInNode(word, this.root);
};

WordDictionary.prototype.searchInNode = function(word, node) 
{
    for (let i = 0; i < word.length; i++) 
    {
        const char = word[i];
        if (char === '.') 
        {
            for (const key in node.children) 
            {
                if (this.searchInNode(word.slice(i + 1), node.children[key])) 
                {
                    return true;
                }
            }

            return false;
        } 
        else 
        {
            if (!node.children[char]) 
            {
                return false;
            }
            
            node = node.children[char];
        }
    }
    
    return node.isEndOfWord;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

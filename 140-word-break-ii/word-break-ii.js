/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) 
{
    const wordSet = new Set(wordDict);
    const memo = new Map();

    const dfs = (s) => {
        if (memo.has(s))
        {
            return memo.get(s);
        }

        const result = [];
        if (wordSet.has(s))
        {
            result.push(s);
        }

        for (let i = 1; i < s.length; i++)
        {
            const prefix = s.slice(0, i);
            if (wordSet.has(prefix))
            {
                const suffix = s.slice(i);
                const suffixWays = dfs(suffix);
                for (const way of suffixWays)
                {
                    result.push(prefix + ' ' + way);
                }
            }
        }

        memo.set(s, result);
        return result;
    };

    return dfs(s);
};
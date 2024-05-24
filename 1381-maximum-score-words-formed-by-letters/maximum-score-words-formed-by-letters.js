/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) 
{
    const calculateWordScore = (word) => {
        let wordScore = 0;
        for (let char of word) 
        {
            wordScore += score[char.charCodeAt(0) - 'a'.charCodeAt(0)];
        }

        return wordScore;
    };

    const canFormWord = (word, availableLetters) => {
        const wordCount = {};
        for (let char of word) 
        {
            wordCount[char] = (wordCount[char] || 0) + 1;
            if (!availableLetters[char] || wordCount[char] > availableLetters[char]) 
            {
                return false;
            }
        }

        return true;
    };

    const generateCombinations = (index, currentLetters, currentScore) => {
        if (index === words.length) 
        {
            maxScore = Math.max(maxScore, currentScore);
            return;
        }

        if (canFormWord(words[index], currentLetters)) 
        {
            const newLetters = { ...currentLetters };
            for (let char of words[index]) 
            {
                newLetters[char]--;
            }

            generateCombinations(index + 1, newLetters, currentScore + calculateWordScore(words[index]));
        }

        generateCombinations(index + 1, currentLetters, currentScore);
    };

    let maxScore = 0;
    const availableLetters = {};

    for (let letter of letters) 
    {
        availableLetters[letter] = (availableLetters[letter] || 0) + 1;
    }

    generateCombinations(0, availableLetters, 0);

    return maxScore;
};
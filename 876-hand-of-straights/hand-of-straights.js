/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) 
{
    if (hand.length % groupSize !== 0) 
    {
        return false;
    }

    const count = {};
    for (let card of hand) 
    {
        count[card] = (count[card] || 0) + 1;
    }

    const sortedCards = Object.keys(count).map(Number).sort((a, b) => a - b);

    for (let card of sortedCards) 
    {
        if (count[card] > 0) 
        {
            const needed = count[card];
            for (let i = 0; i < groupSize; i++) 
            {
                const currentCard = card + i;
                if (count[currentCard] === undefined || count[currentCard] < needed) 
                {
                    return false;
                }
                
                count[currentCard] -= needed;
            }
        }
    }

    return true;
};

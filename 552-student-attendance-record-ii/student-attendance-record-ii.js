/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) 
{
    const MOD = 1e9 + 7;

    const dp = Array.from({ length: n + 1 }, () =>
        Array.from({ length: 2 }, () =>
            Array(3).fill(0)
        )
    );

    dp[0][0][0] = 1;

    for (let i = 0; i < n; i++) 
    {
        for (let a = 0; a < 2; a++) 
        {
            for (let l = 0; l < 3; l++) 
            {
                dp[i + 1][a][0] = (dp[i + 1][a][0] + dp[i][a][l]) % MOD;

                if (a < 1) 
                {
                    dp[i + 1][a + 1][0] = (dp[i + 1][a + 1][0] + dp[i][a][l]) % MOD;
                }

                if (l < 2) 
                {
                    dp[i + 1][a][l + 1] = (dp[i + 1][a][l + 1] + dp[i][a][l]) % MOD;
                }
            }
        }
    }

    let result = 0;
    for (let a = 0; a < 2; a++) 
    {
        for (let l = 0; l < 3; l++) 
        {
            result = (result + dp[n][a][l]) % MOD;
        }
    }

    return result;
};
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    /** Fazer uma regra para os dados abaixo virarem os valores informados.
     * IV = 4, IX = 9
     * XL = 40, XC = 90
     * CD = 400, CM = 900
     */

    const I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000;
    
    const arrLetters = s.split('');
    
    const obj = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

    const arrNumbers = arrLetters.map( elm => obj[elm] );

    /**
     * sempre que o proximo numero for maior que o atual fazer subtracao.
     * sempre que o proximo numero for menor que o atual fazer adicao.
     */

    let newNumbers = [];
    for (let i = 0, j = 1; i < arrNumbers.length; i++, j++) {
        let number = '';
        if (arrNumbers[i] < arrNumbers[j]) {
            number = arrNumbers[j] - arrNumbers[i];
            newNumbers.push(number);
            i++;
            j++;
        } else {
            newNumbers.push(arrNumbers[i]);
        }
    }

    let result = newNumbers.reduce( (sum , val) => sum += val );

    if (result)
        return result;
};

console.log(romanToInt('MCMXCIV'));
 
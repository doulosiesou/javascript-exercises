const palindromes = function (word) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                     'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
                     'y', 'z'];
    let pTest = '';
    let modWord = '';
    let modWord2 = '';

    for (letter of word) {
        if (letters.includes(letter.toLowerCase())) {
            modWord += letter.toLowerCase();
        };
    };

    for (let i=modWord.length-1; i>=0; i--) {
        pTest += modWord[i];
    }

    if (pTest === modWord) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

const palindromes = function (word) {
    let pTest = ''
    for (const letter of word) {
        console.log(letter);
    }
    for (let i=word.length-1; i>=0; i--) {
        pTest += word[i];
    }
    if (pTest.toLowerCase() === word.toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

const reverseString = function(word) {
    let revString = '';
    for (let i = word.length-1; i>=0; i--) {
        revString = revString + word[i];
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;

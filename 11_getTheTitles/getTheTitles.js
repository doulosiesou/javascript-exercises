const getTheTitles = function(obj) {
    let titleArray = [];
    for (const book of obj) {
        titleArray.push(book.title);
    }
    return titleArray
};

// Do not edit below this line
module.exports = getTheTitles;

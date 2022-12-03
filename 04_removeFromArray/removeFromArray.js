function removeFromArray(arr, ...params) {
    let index;
    
    for (const item of params) {
        if (arr.includes(item)) {
            index = arr.indexOf(item);
            arr.splice(index, 1);
        };
    };
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;

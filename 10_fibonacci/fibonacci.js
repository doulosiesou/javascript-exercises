const fibonacci = function(num) {
    
    num = Number(num);
    let fibArray = [0, 1, 1, 2];
    let next;

    if(num < 0) {
        return "OOPS";
    }

    for (let i = 4; i <= num + 1; i++) {
        next = fibArray[i-1] + fibArray[i-2];
        fibArray.push(next);  
    }

    return fibArray[num];
};

// Do not edit below this line
module.exports = fibonacci;



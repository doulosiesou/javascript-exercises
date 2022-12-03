const sumAll = function(num1, num2) {

    let sum=0;

    if (num1 > num2) {
        let t1 = num1;
        let t2 = num2;
        num1 = t2;
        num2 = t1;
    }

    if ((num1<0 || num2<0) || (typeof(num1) != "number" || typeof(num2) != "number")) {
        return 'ERROR'
    }

    for (let i = num1; i <= num2; i++) {
        sum += i
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

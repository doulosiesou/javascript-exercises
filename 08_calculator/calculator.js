const add = function(x,y) {
	return Number(x+y);
};

const subtract = function(x,y) {
	return Number(x-y);
};

const sum = function(...nums) {
  let sum = 0;
  let arr = nums[0];
  for (let i=0; i<arr.length; i++) {
    sum += arr[i];
  };
  return Number(sum);
};

const multiply = function(...nums) {
  let mult = 1;
  let arr = nums[0];
  for (let i=0; i<arr.length; i++) {
    mult *= arr[i];
  };

  return Number(mult);
};

const power = function(num, exp) {
	return Number(num ** exp);
};

const factorial = function(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
	return Number(fact);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

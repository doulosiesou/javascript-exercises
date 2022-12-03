const convertToCelsius = function(tempF) {
  const tempC = (tempF - 32) * 5/9;
  
  if (tempC !== 0) {
    return Number(tempC.toFixed(1));
  } else {
    return 0;
  }
  
};

const convertToFahrenheit = function(tempC) {
  const tempF = tempC * 9/5 + 32
  return Number(tempF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

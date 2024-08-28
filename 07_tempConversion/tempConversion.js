const convertToCelsius = function() {
    let x = (arguments[0] - 32) * 5.0 / 9.0;
    x = Math.round(x *10) / 10;
    return x;
};

const convertToFahrenheit = function() {
  let x = (arguments[0] * 9.0 / 5.0) + 32;
  x = Math.round(x * 10) / 10;
  return x;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

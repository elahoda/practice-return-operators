var shoutIt = function (name) {
  var shout = `Hello ${name}, nice to meet you`.toUpperCase();
  return shout;
};
console.log(shoutIt("Pam"));

// Multiplication and number check

var multiply = function (num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    var numonly = "numbers only";
    return numonly;
  } else {
    return num1 * num2;
  }
};
console.log(multiply(20, "apple"));

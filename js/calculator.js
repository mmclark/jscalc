module.exports = Calculator;

// Constructor
function Calculator() {
}


/**
 * Take an expression string and split it into tokens
 */
Calculator.prototype.tokenize = function (expression) {
  return expression.split(' ');
};


/**
 * Take an arithmetic expression such as "2 + 3" as a string
 * and return the correct result (5 in this case) as a number.
 */
Calculator.prototype.evaluate = function (expression) {
  var tokens = this.tokenize(expression);
  return Number(tokens[0]) + Number(tokens[2]);
};

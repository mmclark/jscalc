var Calculator = require('../calculator.js');
var test = require('tape');

test('string tokenizer', function (assert) {
  var calc = new Calculator();
  var result = calc.tokenize("1 + 1");
  assert.deepEqual(result, ['1', '+', '1']);
  assert.end();
});

test('Adding 0 and 0', function (assert) {
  var calc = new Calculator();
  var result = calc.evaluate("0 + 0");
  assert.equal(result, 0);
  assert.end();
});

test('Adding 1 and 1', function(assert) {
  var calc = new Calculator();
  var result = calc.evaluate("1 + 1");
  assert.equal(result, 2);
  assert.end();
});

test('Adding 1 and -1', function(assert) {
  var calc = new Calculator();
  var result = calc.evaluate("1 + -1");
  assert.equal(result, 0);
  assert.end();
});

test('Adding -1 and -1', function(assert) {
  var calc = new Calculator();
  var result = calc.evaluate("-1 + -1");
  assert.equal(result, -2);
  assert.end();
});

test('Adding 250 and 150', function(assert) {
  var calc = new Calculator();
  var result = calc.evaluate("250 + 150");
  assert.equal(result, 400);
  assert.end();
});

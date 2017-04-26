var Foo = require('../main.js');
var test = require('tape');

test('should say hello', function(assert) {
  var foo = new Foo();
  var result = foo.sayHello();
  assert.equal(result, 'The message is: hello');
  assert.end();
});

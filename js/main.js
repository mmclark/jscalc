module.exports = Foo;

function Foo(msg) {
  this.msg = msg || 'hello';
}

Foo.prototype.sayHello = function (myMsg) {
  return 'The message is: ' + (myMsg || this.msg);
};

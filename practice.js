function foo() {
    console.log('foo');
}
function bar() {
    console.log('bar');
}
var first = bar();
var second = foo(bar());
console.log(second);
let index = require('./build/Release/index.node');
fib = [0, 1];

function get_fib(first, second) {
    let next = index.get(first, second);
    this.fib.push(next);
    return (next.toString());
}

function set_fib(arr) {
    this.fib = arr;
}

exports.index = {
    fib,
    get_fib,
    set_fib
};
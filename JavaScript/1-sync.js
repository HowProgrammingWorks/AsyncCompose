'use strict';

const compose = (f1, f2) => (x) => f1(f2(x));

// Usage

const inc = (x) => x + 1;
const twice = (x) => x * 2;

const f = compose(twice, inc);

const res = f(7);
console.log({ res });

'use strict';

const compose = (...fns) => x => {
  const fn = fns.shift();
  if (fns.length === 0) return fn(x);
  return fn(x).then(res => compose(...fns)(res));
};

// Usage

const inc = x => Promise.resolve(x + 1);
const twice = x => Promise.resolve(x * 2);
const square = x => Promise.resolve(x * x);

const f = compose(inc, twice, square, inc);

f(7).then(console.log);

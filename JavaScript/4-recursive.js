'use strict';

const compose = (...fns) => (x, callback) => {
  const fn = fns.shift();
  if (fns.length === 0) {
    fn(x, callback);
    return;
  }
  fn(x, (err, res) => {
    if (err) {
      callback(err);
      return;
    }
    const f = compose(...fns);
    f(res, callback);
  });
};

// Usage

const inc = (x, callback) => callback(null, x + 1);
const twice = (x, callback) => callback(null, x * 2);
const square = (x, callback) => callback(null, x * x);

const f = compose(inc, twice, square, inc); // 257

f(7, (err, res) => {
  console.log({ res });
});

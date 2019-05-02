'use strict';

const compose = (f1, f2) => (x, callback) => {
  f1(x, (err, res) => {
    if (err) {
      callback(err);
      return;
    }
    f2(res, callback);
  });
};

// Usage

const inc = (x, callback) => callback(null, x + 1);
const twice = (x, callback) => callback(null, x * 2);

const f = compose(inc, twice);

f(7, (err, res) => {
  console.log({ res });
});

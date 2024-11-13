'use strict';

const compose = (f1, f2) => (x, callback) => {
  f2(x, (err, res) => {
    if (err) {
      callback(err);
      return;
    }
    f1(res, callback);
  });
};

// const compose = (f1, f2) => (x, callback) =>
//   f2(x, (err, res) => (err ? callback(err) : f1(res, callback)));

// Usage

const inc = (x, callback) => callback(null, x + 1);
const twice = (x, callback) => callback(null, x * 2);

const f = compose(twice, inc);

f(7, (err, res) => {
  if (err) console.error(err);
  else console.log({ res });
});

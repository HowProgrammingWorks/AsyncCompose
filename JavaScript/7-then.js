'use strict';

const compose = (...fns) => x => {
  const fn = fns.shift();
  if (fns.length === 0) return fn(x);
  return fn(x).then(res => compose(...fns)(res));
};

// Usage

const inc = async x => x + 1;
const twice = async x => x * 2;
const square = async x => x * x;

const f = compose(inc, twice, square, inc);

(async () => {
  const res = await f(7);
  console.dir({ res });
})();

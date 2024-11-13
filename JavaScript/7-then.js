'use strict';

const pipe =
  (...fns) =>
  (x) => {
    const fn = fns.shift();
    if (fns.length === 0) return fn(x);
    return fn(x).then((res) => pipe(...fns)(res));
  };

// Usage

const inc = async (x) => x + 1;
const twice = async (x) => x * 2;
const square = async (x) => x * x;

const f = pipe(inc, twice, square, inc);

const main = async () => {
  const res = await f(7);
  console.dir({ res });
};

main();

'use strict';

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, f) => acc.then(f), Promise.resolve(x));

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

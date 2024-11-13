'use strict';

const parallel =
  (...fns) =>
  (x) =>
    Promise.all(fns.map((f) => f(x)));

// Usage

const inc = async (x) => x + 1;
const twice = async (x) => x * 2;
const square = async (x) => x * x;

const f = parallel(inc, twice, square, inc);

const main = async () => {
  const res = await f(7);
  console.dir({ res });
};

main();

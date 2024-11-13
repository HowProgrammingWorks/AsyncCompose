'use strict';

const compose = (f1, f2) => async (x) => await f1(await f2(x));
const pipe = (f1, f2) => async (x) => await f2(await f1(x));

// Usage

const inc = async (x) => x + 1;
const twice = async (x) => x * 2;

const main = async () => {
  const f1 = compose(inc, twice);
  const res1 = await f1(7);
  console.dir({ res1 });

  const f2 = pipe(inc, twice);
  const res2 = await f2(7);
  console.dir({ res2 });
};

main();

'use strict';

const compose = (f1, f2) => async x => await f2(await f1(x));

// Usage

const inc = async x => x + 1;
const twice = async x => x * 2;

const f = compose(inc, twice);

(async () => {
  const res = await f(7);
  console.dir({ res });
})();

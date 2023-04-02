const sqrt = Math.sqrt;

const square1 = (x) => x * x;
const diagonal1 = (x, y) => sqrt(square1(x) + square1(y));

export { square1, diagonal1 };

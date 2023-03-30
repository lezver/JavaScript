const sqrt = Math.sqrt;

const square = (x) => x * x;
const diagonal = (x, y) => sqrt(square(x) + square(y));

export { square, diagonal };

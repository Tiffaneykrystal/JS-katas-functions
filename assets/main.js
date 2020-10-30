// 1.)//
function add() {
  return 2 + 4;
}
console.log(add(2, 4));

//2.)//
function multiply(x, y) {
  let total = x;
  for (let index = 1; index < y; index += 1) {
    total = add(total, x);
  }
  return total;
}
console.log(multiply(6, 4));

//3.)//
function power(x, n) {
  let total = x;
  for (let index = 1; index < n; index += 1) {
    total = multiply(total, x);
  }
  return total;
}
console.log(power(2, 8));
console.log(power(3, 4));

//4.)//
function factorial(x) {
  let total = 1;
  for (let index = x; index >= 1; index -= 1) {
    if (x > 0) {
      total = multiply(index, total);
    }
  }
  return total;
}
console.log(factorial(5));

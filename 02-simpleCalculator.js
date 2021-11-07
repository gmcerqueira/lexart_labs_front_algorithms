const calculator = {
  sum: (array) => array.reduce((prev, curr) => prev + curr),
  subtraction: (array) => array.reduce((prev, curr) => prev - curr),
  multiplication: (array) => array.reduce((prev, curr) => prev * curr),
  division: (a, b) => {
    if (b === 0) return "Division by 0 is not allowed";
    return a / b;
  },
};

console.log(calculator.sum([1, 2, 3, 4]));
console.log(calculator.subtraction([1, 2, 3, 4]));
console.log(calculator.multiplication([1, 2, 3, 4]));
console.log(calculator.division(20, 5));
console.log(calculator.division(20, 0));

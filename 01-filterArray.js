const arrayToFilter = ["a", 10, "b", "hola", 122, 15];

const filterArray = (array) => {
  const letters = array.filter((item) => typeof item === "string");
  const numbers = array.filter((item) => typeof item === "number");

  let largestNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) largestNumber = numbers[i];
  }

  console.log(`Results:
  Letters: ${letters}
  Numbers: ${numbers}
  Largest number: ${largestNumber}
  `);
};

filterArray(arrayToFilter);

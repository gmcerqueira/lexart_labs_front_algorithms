const arrayToFilter = ["a", 10, "b", "hola", 122, 15];

const filterArray = (array) => {
  const letters = array
    .filter((item) => typeof item === "string")
    .map((item) => (item.length > 1 ? item.split("") : item))
    .flat(1);

  const uniqueLetters = letters.filter((item, i) => letters.indexOf(item) == i);
  const numbers = array.filter((item) => typeof item === "number");

  let largestNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) largestNumber = numbers[i];
  }

  console.log(`Results:
  Letters: ${letters}
  Unique letters: ${uniqueLetters}
  Numbers: ${numbers}
  Largest number: ${largestNumber}
  `);
};

filterArray(arrayToFilter);

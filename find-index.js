const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const findIndex = (num) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === num) {
      console.log(`${num} found at index ${i}`);
    }
  }
};

// console.log(findIndex(12)); // found
// console.log(findIndex(45)); // undefined

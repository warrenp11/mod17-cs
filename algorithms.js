const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

// console.log(isEven(4));
// console.log(isEven(44));
// console.log(isEven(444));
// console.log(isEven(41));
// console.log(isEven(34));
// console.log(isEven(401));
// console.log(isEven(455));

const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const findIndex = (num) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === num) {
      console.log(`${num} found at index ${i}`);
    }
  }
};

console.log(findIndex(12)); // found
console.log(findIndex(45)); // undefined
console.log(findIndex(40)); 
console.log(findIndex(99));
console.log(findIndex(71));
console.log(findIndex(21));
console.log(findIndex(87));
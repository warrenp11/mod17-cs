const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

// Binary Search without Recursion
const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  if (num === arr[middle]) {
    return "found it";
  } else if (num < arr[middle]) {
    right = middle;
    return `bring right down to ${right}`;
  } else if (num > arr[middle]) {
    left = middle + 1;
    return `bring left up to ${left}`;
  }
};

// Console logs for binary search without recursion
console.log(binarySearch(data, 38));
console.log(binarySearch(data, 71));
console.log(binarySearch(data, 54));

// Binary Search with Recursion
const binarySearch = (arr, num, left, right) => {
  let middle = Math.floor((left + right) / 2);

  // range overlapped, so never found number
  if (left > right) {
    return -1;
  } else if (num === arr[middle]) {
    return middle;
  } else if (num < arr[middle]) {
    // call again with a new right value
    return binarySearch(arr, num, left, middle - 1);
  } else {
    // call again with a new left value
    return binarySearch(arr, num, middle + 1, right);
  }
};

// Console logs for binary search with recursion
// set initial left and right values on first call
console.log(binarySearch(data, 12, 0, data.length - 1));

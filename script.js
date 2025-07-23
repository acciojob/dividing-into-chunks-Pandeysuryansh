const divide = (arr, n) => {
  const result = [];
  let current = [];
  let currentSum = 0;

  for (let num of arr) {
    if (currentSum + num > n) {
      result.push(current);
      current = [num];
      currentSum = num;
    } else {
      current.push(num);
      currentSum += num;
    }
  }

  // Push the last group if not empty
  if (current.length > 0) {
    result.push(current);
  }

  return result;
};

// Example usage
const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));

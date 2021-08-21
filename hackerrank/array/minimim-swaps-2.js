const minimumSwaps = (arr) => {
  let swaps = 0;
  const size = arr.length;
  const positions = Array.from({length: size}, (v, i) => 0);

  for (let i = 0; i < arr.length; i++) {
    positions[arr[i] - 1] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      const currentValue = arr[i];
      const swapPosition = positions[i];
      arr[i] = arr[swapPosition];
      arr[swapPosition] = currentValue;
      positions[i] = i;
      positions[currentValue-1] = swapPosition;
      swaps++;
    }
  }

  return swaps;
};

let arr = [7, 1, 3, 2, 4, 5, 6];
console.log(minimumSwaps(arr));
arr = [4, 3, 1, 2];
console.log(minimumSwaps(arr));
arr = [2, 3, 4, 1, 5];
console.log(minimumSwaps(arr));
arr = [1, 3, 5, 2, 4, 6, 7];
console.log(minimumSwaps(arr));

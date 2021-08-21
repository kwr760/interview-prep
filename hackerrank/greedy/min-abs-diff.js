const minimumAbsoluteDifference = (arr) => {
  let min = Math.abs(arr[0] - arr[1]); ;
  for (let i = 0; i < (arr.length - 1); i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const a = Math.abs(arr[i] - arr[j]);
      min = Math.min(min, a);
    }
  }
  return min;
}

const minimumAbsoluteDifferenceQuick = (arr) => {
  arr = arr.sort((a,b) => (a - b));

  let min = arr[1] - arr[0];
  for (let i = 1; i < (arr.length - 1); i++) {
    const a = Math.abs(arr[i+1] - arr[i]);
    min = Math.min(min, a);
  }
  return min;
}

let arr = [-2, 2, 4];
let expected = 2;
console.log(JSON.stringify(arr), expected, minimumAbsoluteDifference(arr));
console.log(JSON.stringify(arr), expected, minimumAbsoluteDifferenceQuick(arr));

arr = [3, -7, 0];
expected = 3;
console.log(JSON.stringify(arr), expected, minimumAbsoluteDifference(arr));
console.log(JSON.stringify(arr), expected, minimumAbsoluteDifferenceQuick(arr));

arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
expected = 1;
console.log(JSON.stringify(arr), expected, minimumAbsoluteDifference(arr));
console.log(JSON.stringify(arr), expected, minimumAbsoluteDifferenceQuick(arr));

arr = [1, -3, 71, 68, 17];
expected = 3;
console.log(JSON.stringify(arr), expected, minimumAbsoluteDifference(arr));
console.log(JSON.stringify(arr), expected, minimumAbsoluteDifferenceQuick(arr));

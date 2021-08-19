const countSwap = (a) => {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < (a.length - 1); j++) {
      if (a[j] > a[j+1]) {
        count++;
        [a[j+1], a[j]] = [a[j], a[j+1]];
      }
    }
  }
  console.log(`Array is sorted in ${count} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
}

let a = [ 6, 4, 1];
console.log(JSON.stringify(a));
countSwap(a);
a = [ 3, 2, 1];
console.log(JSON.stringify(a));
countSwap(a);
a = [ 2, 3, 1];
console.log(JSON.stringify(a));
countSwap(a);

const luckBalance = (k, contests) => {
  let allowedLoses = k;
  contests.sort((a, b) => (b[0] - a[0]));
  let luck = 0;

  for (let i = 0; i < contests.length; i++) {
    const [luckAmount, important] = contests[i];
    if (!important) {
      luck += luckAmount;
    } else {
      if (allowedLoses) {
        allowedLoses--;
        luck += luckAmount;
      } else {
        luck -= luckAmount;
      }
    }
  }

  return luck;
};


let k = 2;
let contests = [[5,	1],[1, 1], [4, 0]];
let expected = 10;
console.log(k, JSON.stringify(contests), expected, luckBalance(k, contests));

k = 1;
expected = 8;
console.log(k, JSON.stringify(contests), expected, luckBalance(k, contests));

k = 3;
contests = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]];
expected = 29;
console.log(k, JSON.stringify(contests), expected, luckBalance(k, contests));

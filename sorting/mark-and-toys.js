const maximumToys = (prices, k) => {
  const cheap = [];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < k) {
      cheap.push(prices[i]);
    }
  }
  cheap.sort((a, b) => (a-b));
  let cost = 0;
  let count = 0;
  for (let i = 0; i < cheap.length; i++) {
    if ((cost + cheap[i]) < k) {
      cost += cheap[i];
      count++;
    }
  }
  return count;
};

let prices = [1, 2, 3, 4];
let k = 7;
console.log(JSON.stringify(prices), k, maximumToys(prices, k));

prices = [1, 12, 5, 111, 200, 1000, 10];
k = 50;
console.log(JSON.stringify(prices), k, maximumToys(prices, k));


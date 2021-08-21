const whatFlavorsSlow = (costs, money) => {
  for (let i = 0; i < costs.length; i++) {
    if (costs[i] < money) {
      firstIndex = i + 1;
      firstCost = costs[i];
      for (let j = i + 1; j < costs.length; j++) {
        if (money === (firstCost + costs[j])) {
          return `${firstIndex} ${j + 1}`;
        }
      }
    }
  }
}

const whatFlavors = (costs, money) => {
  const costMap = new Map();
  for (let i = 0; i < costs.length; i++) {
    const indexes = costMap.get(costs[i]) || [];
    indexes.push(i);
    costMap.set(costs[i], indexes);
  }

  for (let i = 0; i < costs.length; i++) {
    const look = money - costs[i];
    const found = costMap.get(look);
    if (found) {
      if (found[0] !== i) {
        return `${i + 1} ${found[0] + 1}`;
      } else if (found.length > 1 && found[1] !== i) {
        return `${i + 1} ${found[1] + 1}`;
      }
    }
  }
}

let money = 8;
let cost = [4, 3, 2, 5, 7];
let expected = '2 4';
console.log(JSON.stringify(cost), money, expected, whatFlavors(cost, money));
money = 12;
cost = [7, 2, 5, 4, 11];
expected = '1 3';
console.log(JSON.stringify(cost), money, expected, whatFlavors(cost, money));
money = 5;
cost = [1, 2, 3, 5, 6];
expected = '2 3';
console.log(JSON.stringify(cost), money, expected, whatFlavors(cost, money));
money = 4;
cost = [1, 4, 5, 3, 2];
expected = '1 4';
console.log(JSON.stringify(cost), money, expected, whatFlavors(cost, money));
money = 4;
cost = [2, 2, 4, 3];
expected = '1 2';
console.log(JSON.stringify(cost), money, expected, whatFlavors(cost, money));

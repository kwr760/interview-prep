// https://practice.geeksforgeeks.org/problems/count-ways-to-reach-the-nth-stair-1587115620/1

// 1 => 1 -> a => .
// 2 => 2 -> aa b => .. _
// 3 => 3 -> aaa ba -> ... _. ._
// 4 => 5 -> aaaa baa bb -> .... _.. ._. .._ __
// 5 => 8 -> aaaaa baaa bba -> ..... _... ._.. .._. ..._ __. _._ .__
// 6 => 13 -> aaaaaa baaaa bbaa bbb -> ...... _.... ._... .._.. ..._. ...._ __.. _._. _.._ .__. ._._ ..__ ___
// 7 -> 21
// 8 -> 34
// 9 -> 55
// 10 -> 89
export const solution = (n) => {
  const nextValue = () => {
    return BigInt(store[0]) + BigInt(store[1]);
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  const modulator = BigInt(Math.pow(10, 9) + 7);
  const store = [1, 2];
  let count = 3;
  while (count < n) {
    const next = nextValue();
    store[0] = store[1];
    store[1] = next;
    count = count + 1;
  }

  return nextValue() % modulator;
}

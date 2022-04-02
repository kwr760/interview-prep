// https://practice.geeksforgeeks.org/problems/trailing-zeroes-in-factorial5134/1

/**
 * @param {number[]} array
 * @param {number} n
 * @returns {number}
 */

/**
 * @param n
 * @constructor
 */
export const factorial = (n) => {
  if (n === 1 || n === 0) {
    return BigInt(1);
  }
  return BigInt(n) * BigInt(factorial(n - 1));
}

export const trailingZeroes = (n) => {
  if (n === 0) {
    return n;
  }
  const fifth = Math.floor(n / 5);
  return fifth + trailingZeroes(fifth);
}

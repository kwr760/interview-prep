/**
 * Use number and flips the bits.  Quick resource:
 *  &   : 0101 & 0001 = 0001
 *  |   : 0101 | 0001 = 0101
 *  ^   : 0101 ^ 0001 = 0100
 *  ~   : ~0101       = 1010
 *  <<  : 0101 << 1   = 1010
 *  >>  : 0101 >> 1   = 0010
 *  >>> :
 *
 * @param arr
 * @param n
 * @constructor
 */
export const missingNumber = (arr, n) => {
  // Clever math trick
  let sum=(n*(n+1))/2;
  let t = 5000;
  const sum2 = (t*(t+1))/2;
  for(let i=0;i<arr.length;i++)
    sum=sum-arr[i];
  return sum;


  // const sum = arr.reduce((sum, value) => {
  //   return BigInt(sum) | BigInt(Math.pow(2, value - 1));
  // }, 0);
  // for (let p = 0; p < n; p++) {
  //   const missing = BigInt(Math.pow(2, p));
  //   const check = sum & missing;
  //   if (!check) {
  //     return p+1;
  //   }
  // }
  // return -1;
}

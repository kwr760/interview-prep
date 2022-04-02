//
// https://practice.geeksforgeeks.org/problems/reverse-bits-1611130171/1/
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
 * @param n
 * @constructor
 */
export const solution = (n) => {
  let reversed = 0;
  while (n) {
    const one = n & 1;
    n = n >> 1;
    reversed = reversed << 1;
    if (one) {
      reversed = reversed | 1;
    }
  }

  return reversed;
}

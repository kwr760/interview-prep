import { solution } from "./solution.js";

describe('test name', () => {
  it('test 1', () => {
    // Arrange
    const str = "bac";
    const expected = "abc acb bac bca cab cba";

    // Act
    const result = solution(str);

    // Assert
    expect(result.join(' ')).toEqual(expected);
  });
  it('test 2', () => {
    // Arrange
    const str = "ABSG";
    const expected = "ABGS ABSG AGBS AGSB ASBG ASGB " +
      "BAGS BASG BGAS BGSA BSAG BSGA GABS " +
      "GASB GBAS GBSA GSAB GSBA SABG SAGB " +
      "SBAG SBGA SGAB SGBA";

    // Act
    const result = solution(str);

    // Assert
    expect(result.join(' ')).toEqual(expected);
  });
});

// https://www.interviewbit.com/problems/pascal-triangle/

module.exports = {
  //param A : integer
  //return a array of array of integers
  getValue: function(arr, pos) {
    if (pos < 0){
      return 0;
    }
    if (pos >= arr.length) {
      return 0;
    }
    return arr[pos];
  },
  solve : function(A) {
    const triangle = [];
    let previous = [];
    for (i = 0; i < A; i++) {
      const current = [];
      for (j = 0; j <= i; j++) {
        let value = this.getValue(previous, j - 1) + this.getValue(previous, j);
        value = (value === 0) ? 1 : value;
        current.push(value);
      }
      triangle.push(current)
      previous = current;
    }
    return(triangle);
  }
};

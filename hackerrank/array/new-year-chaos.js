
const newYearChaosCheat = (q) => {
  let swaps = 0

  for (let i = 0; i < q.length; i++) {
    let bribes = q[i] - (i + 1)
    let maxAdvance = q[i] - 2 > 0 ? q[i] - 2 : 0
    if (bribes > 2) {
      console.log('Too chaotic')
      return
    }
    for (let j = maxAdvance; j < i; j++) {
      if (q[j] > q[i]) swaps++
    }
  }
  console.log(swaps)
}

const newYearChaosSlow = (q) => {
    let swaps = 0

    for (let i = 0; i < q.length; i++) {
      let bribes = q[i] - (i + 1)
      let maxAdvance = q[i] - 2 > 0 ? q[i] - 2 : 0
      if (bribes > 2) {
        console.log('Too chaotic')
        return
      }
      for (let j = maxAdvance; j < i; j++) {
        if (q[j] > q[i]) swaps++
      }
    }
    console.log(swaps)
}
/*
  for (let i = 0; i < q.length; i++) {
    const current = q[i];

    if (current > (i + 3)) {
      console.log('Too chaotic');
      return;
    } else if (current > i + 1) {
      totalMoves += current - (i + 1);
    }
  }
 */
/*
  for (let i = 0; i < q.length; i++) {
    const current = q[i];
    if (current > (i + 3)) {
      console.log('Too chaotic');
      return;
    }
  }
  for (let i = 0; i < q.length; i++) {
    const current = q[i];
    if (current > i + 1) {
      const indexOfOriginal = q.findIndex(e => e === i+1);
      q.splice(indexOfOriginal, 1);
      q.splice(i, 0, i+1);
      const moves = indexOfOriginal - i;
      totalMoves += moves;
    }
  }
 */
// newYearChaos([1,2,5,3,4,6,7,8]); // 2
//              [1,2,3,4,5,6,7,8]
// newYearChaos([3,1,5,2,4,6,7,8]); // 4
//              [1,2,3,4,5,6,7,8]
// newYearChaos([3,4,1,2,5,6,7,8]); // 4
//              [1,2,3,4,5,6,7,8]
// newYearChaos([2,1,5,3,4]); // 3
//              [1,2,3,4,5]
// newYearChaos([2,5,1,3,4]); // chaos
// newYearChaos([5,1,2,3,7,8,6,4]); // chaos
newYearChaosCheat([1,2,5,3,7,8,6,4]); // 7
//              [1,2,3,4,5,6,7,8]

const cloudJumps = (trip => {
  let jumps = 0;
  for (let pos = 0; pos < trip.length; pos++) {
    if ((pos + 2 < trip.length) && (trip[pos+2] === 0)) {
      pos++;
    }
    if (pos + 1 < trip.length) {
      jumps++;
    }
  }
  return jumps;
});
const clouds = [
  [0, 1, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 0],
];

clouds.map(trip => {
  console.log(JSON.stringify(trip), cloudJumps(trip));
});

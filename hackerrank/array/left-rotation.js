const leftRotation = (size, rotateCount) => {
  const arr = Array.from({length: size}, (v, i) => i + 1);
  for (let i = 0; i < rotateCount; i++) {
    const front = arr.shift();
    arr.push(front);
  }
  return arr;
}

const rotateLeftModulo = (size, rotateCount) => {
  const arr = Array.from(
    {length: size},
    (v, i) => (i + rotateCount) % size + 1
  );
  return arr;
}

console.log(JSON.stringify(leftRotation(3, 1)));
console.log(JSON.stringify(leftRotation(5, 2)));
console.log(JSON.stringify(leftRotation(5, 4)));
console.log(JSON.stringify(rotateLeftModulo(3, 1)));
console.log(JSON.stringify(rotateLeftModulo(5, 2)));
console.log(JSON.stringify(rotateLeftModulo(5, 4)));

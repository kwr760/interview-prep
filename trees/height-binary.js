const height = (root, depth) => {
  let leftDepth = depth, rightDepth = depth;
  if (root.left) {
    leftDepth = height(root.left, depth + 1);
  }
  if (root.right) {
    rightDepth = height(root.right, depth + 1);
  }

  return (leftDepth > rightDepth) ? leftDepth : rightDepth;
}

const insert = (root, data) => {
  if (root === undefined) {
    return {
      data,
      left: undefined,
      right: undefined,
    }
  } else {
    if (data <= root.data) {
      root.left = insert(root.left, data);
    } else {
      root.right = insert(root.right, data);
    }
    return root;
  }
}

const main = () => {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);
  const nodes = readLine().replace(/\s+$/g, '').split(' ');

  let root = undefined;
  for (let i = 0; i < n; i++) {
    const data = nodes[i];
    root = insert(root, parseInt(data, 10));
  }

  const result = height(root);

  ws.write(result + '\n');
  ws.end();
}

const test = (nodes) => {
  let root = undefined;
  for (let i = 0; i < nodes.length; i++) {
    const data = nodes[i];
    root = insert(root, parseInt(data, 10));
  }

  return height(root, 0);
}

let nodes = ['3', '5', '2', '1', '4', '6', '7'];
let expected = 3;
console.log(JSON.stringify(nodes), expected, test(nodes));

nodes = ['15'];
expected = 0;
console.log(JSON.stringify(nodes), expected, test(nodes));

nodes = ['3', '1', '7', '5', '4'];
expected = 3;
console.log(JSON.stringify(nodes), expected, test(nodes));

nodes = ['1', '2', '3', '4', '5', '6'];
expected = 5;
console.log(JSON.stringify(nodes), expected, test(nodes));

nodes = ['1', '3', '2', '5', '4', '6', '7', '9', '8', '11', '13', '12', '10', '15', '14'];
expected = 9;
console.log(JSON.stringify(nodes), expected, test(nodes));

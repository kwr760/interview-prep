import { Node } from './Node.js';

export const buildTree = (str) => {
  if (str.length === 0 || str[0] === 'N')
    return null;

  let ip = [];
  let ip_str = str.split(" ");

  for (let i=0;i<ip_str.length;i++)
    ip.push(ip_str[i]);

  let root = new Node(parseInt(ip[0]));

  let queue = [];
  queue.push(root);

  let i = 1;
  while (queue.length!==0 && i < ip.length) {

    let currNode = queue[0];
    queue.shift();

    let currVal = ip[i];
    if (currVal !== "N") {
      currNode.left = new Node(parseInt(currVal));
      queue.push(currNode.left);
    }

    i++;
    if (i >= ip.length)
      break;
    currVal = ip[i];
    if (currVal !== "N") {
      currNode.right = new Node(parseInt(currVal));
      queue.push(currNode.right);
    }
    i++;
  }

  return root;
}

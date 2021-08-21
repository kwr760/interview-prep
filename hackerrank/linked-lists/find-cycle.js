const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(node) {
    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

function findCycle(list) {
  let current = list;

  if (current === null) {
    return 0;
  }
  let next = current.next;
  if (next === null) {
    return 0;
  }

  while (current && next) {
    if (current === next) {
      return 1;
    }
    current = current.next;
    if (next.next === null) {
      return 0;
    }
    next = next.next.next;
  }

  return 0;
}

function main(list, cycle) {
  let llist = new SinglyLinkedList();
  let cycleNode = null;
  let item, node;

  for (let i = 0; i < list.length; i++) {
    item = list[i];
    node = new SinglyLinkedListNode(item);
    llist.insertNode(node);
    if (i === cycle) {
      cycleNode = node;
    }
  }

  if (cycleNode) {
    llist.insertNode(cycleNode);
  }
  return findCycle(llist.head);
}

let list = [1, 2, 3, 4, 5];
let cycle;
let expected = 0;
console.log(expected, main(list));

list = [1, 2, 3, 4, 5, 6];
console.log(expected, main(list));

list = [1, 2, 3, 4, 2];
console.log(expected, main(list));

list = [1];
console.log(expected, main(list));

list = [];
console.log(expected, main(list));

list = [1, 2, 3, 4, 5];
cycle = 2;
expected = 1;
console.log(expected, main(list, cycle));

list = [1, 2, 3, 4, 5, 6];
cycle = 2;
console.log(expected, main(list, cycle));

list = [1, 2, 3, 4, 5];
cycle = 1;
console.log(expected, main(list, cycle));

list = [1];
cycle = 0;
console.log(expected, main(list, cycle));

list = [1, 2, 3, 4, 5];
cycle = 4;
console.log(expected, main(list, cycle));

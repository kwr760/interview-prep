const DoublyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
    this.prev = null;
  }
};

const DoublyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    let node = new DoublyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }

    this.tail = node;
  }
};

function printDoublyLinkedList(node) {
  while (node != null) {
    console.log(node.data);
    node = node.next;
  }
}

function sortedInsert(llist, data) {
  const node = new DoublyLinkedListNode(data);
  let head = llist;
  if (data < head.data) {
    node.next = head;
    head.prev = node;
    return node;
  }
  let prev;
  while (head !== null && data > head.data) {
    prev = head;
    head = head.next;
  }
  prev.next = node;
  node.next = head;
  return llist;
}

function main(list, data) {
    let llist = new DoublyLinkedList();

    for (let i = 0; i < list.length; i++) {
      llist.insertNode(list[i]);
    }

    let llist1 = sortedInsert(llist.head, data);

    printDoublyLinkedList(llist1, " ")
}

let list = [1, 2, 3];
let data = 4;
let expected = [1, 2, 3, 4];
console.log(JSON.stringify(expected), main(list, data));

list = [1, 3, 4, 10];
data = 5;
expected = [1, 3, 4, 5, 10];
console.log(JSON.stringify(expected), main(list, data));

list = [2, 3, 4];
data = 1;
expected = [1, 2, 3, 4];
console.log(JSON.stringify(expected), main(list, data));

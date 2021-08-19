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

function reverse(llist) {
  let head = llist, rev;
  while (head !== null) {
    rev = head;
    head = head.next;
    [rev.prev, rev.next] = [rev.next, rev.prev];
  }
  return rev;
}

function main(list, data) {
    let llist = new DoublyLinkedList();

    for (let i = 0; i < list.length; i++) {
      llist.insertNode(list[i]);
    }

    let llist1 = reverse(llist.head, data);

    printDoublyLinkedList(llist1, " ")
}

let list = [1, 2, 3, 4];
let expected = [4, 3, 2, 1];
console.log(JSON.stringify(expected), main(list));

list = [2, 3, 4];
expected = [4, 3, 2];
console.log(JSON.stringify(expected), main(list));

list = [17, 20, 23, 35, 47];
expected = [47, 35, 23, 20, 17];
console.log(JSON.stringify(expected), main(list));

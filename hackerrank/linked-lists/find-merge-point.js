let inputString = '';
let currentLine = 0;

function readLine() {
  return inputString[currentLine++];
}

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

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

function printSinglyLinkedList(node) {
  while (node != null) {
    console.log(node.data);
    node = node.next;
  }
}

function findMergeNode(headA, headB) {
  let a = headA;
  while (a) {
    let b = headB;
    while (b) {
      if (a === b) {
        return a.data;
      }
      b = b.next;
    }
    a = a.next;
  }

  return "Error: Not Found";
}

function main(index, list1, list2) {
  let llist1 = new SinglyLinkedList();
  for (let i = 0; i < list1.length; i++) {
    llist1.insertNode(list1[i]);
  }

  let llist2 = new SinglyLinkedList();
  for (let i = 0; i < list2.length; i++) {
    llist2.insertNode(list2[i]);
  }

  let ptr1 = llist1.head;
  let ptr2 = llist2.head;

  for (let i = 0; i < list1.length; i++) {
    if (i < index) {
      ptr1 = ptr1.next;
    }
  }

  let llist2Count = list2.length;
  for (let i = 0; i < llist2Count; i++) {
    if (i !== llist2Count-1) {
      ptr2 = ptr2.next;
    }
  }

  ptr2.next = ptr1;

  return findMergeNode(llist1.head, llist2.head);
}

let index = 1;
let listA = [1, 2, 3];
let listB = [1];
let expected = 2;
console.log(expected, main(index, listA, listB));

index = 2;
listA = [1, 2, 3];
listB = [1];
expected = 3;
console.log(expected, main(index, listA, listB));

index = 0
llist1Count = 1
listA = [9]
llist2Count = 72
listB = [2, 6, 6, 2, 5, 3, 2, 2, 9, 3, 10, 4, 1, 5, 9, 9, 5, 1, 8, 1, 6, 6, 9, 6, 8, 10, 10, 8, 3, 8, 1, 7, 6, 7, 8, 10, 9, 9, 1, 9, 3, 3, 4, 3, 7, 4, 1, 3, 4, 1, 5, 1, 8, 5, 6, 5, 6, 7, 5, 1, 5, 5, 7, 2, 3, 4, 3, 3, 5, 5, 1, 7]
expected = 9;
console.log(expected, main(index, listA, listB));

index = 71
llist1Count = 77
listA =  [10, 5, 8, 2, 9, 2, 2, 5, 2, 10, 1, 10, 6, 7, 6, 10, 7, 2, 7, 5, 3, 9, 8, 5, 2, 2, 10, 2, 1, 8, 8, 2, 5, 6, 3, 3, 9, 5, 10, 2, 6, 10, 1, 1, 8, 7, 3, 6, 8,  9, 10, 1, 9, 8, 7, 2, 1, 8, 6, 3, 6, 3, 4, 2, 10, 7, 4, 8, 3, 5, 10, 10, 5, 10, 2, 2, 6]
llist2Count = 94
listB = [8,6,4,7,6,5,6,4,6,9,2,1,1,9,4,5,2,3,3,5,3,7,2,2,6,6,1,7,7,9,3,6,4,6,3,1,10,10,6,8,8,9,8,1,9,3,5,10,6,9,7,8,5,8,1,10,3,3,8,1,1,10,7,6,8,1,8,9,10,4,6,8,2,4,8,1,8,4,10,3,4,8,2,8,5,4,9,7,7,6,10,9,8,6]
expected = 10;
console.log(expected, main(index, listA, listB));

index = 6
llist1Count = 35
listA = [6,2,5,5,7,3,4,9,8,3,1,5,8,2,10,1,10,3,10,4,7,8,3,3,6,2,3,5,9,7,1,4,1,7,10]
llist2Count = 89
listB = [1,6,7,8,10,9,3,8,1,4,10,10,6,10,5,2,9,7,6,6,10,1,10,8,9,2,3,9,1,5,10,1,10,6,9,1,7,3,8,7,6,10,8,3,1,2,7,9,1,2,7,10,4,6,10,3,10,2,3,10,6,2,10,7,10,10,8,6,2,7,4,9,6,1,2,8,4,8,7,6,1,3,8,5,10,7,7,1,10]
expected = 4;
console.log(expected, main(index, listA, listB));

index = 88
llist1Count = 89
listA = [6,3,2,4,2,1,1,7,5,8,10,3,5,2,6,5,7,5,3,3,6,7,10,2,6,8,10,7,7,8,8,4,10,9,8,3,2,10,9,6,7,10,10,4,1,8,8,10,2,10,2,9,8,3,10,3,10,9,1,8,9,9,2,10,9,1,3,10,10,3,7,9,3,9,4,5,6,1,4,9,2,7,8,9,9,7,3,10,8]
llist2Count = 66
listB = [8,8,6,1,7,4,1,1,6,2,4,2,10,8,2,3,4,7,5,10,6,8,6,5,8,7,3,3,6,10,8,5,7,3,7,6,8,9,6,3,1,1,7,2,10,8,5,4,7,1,5,4,9,10,8,6,8,10,8,6,2,7,10,8,9,9]
expected = 8;
console.log(expected, main(index, listA, listB));

index = 10
llist1Count = 43
listA = [7,1,1,9,3,9,1,3,7,5,8,5,5,2,8,5,3,7,3,1,6,2,6,7,9,7,7,9,5,1,7,4,3,8,2,6,6,2,8,4,8,7,10]
llist2Count = 55
listB = [8,7,9,2,5,1,4,1,3,1,9,3,10,7,1,6,8,8,9,2,7,3,7,4,6,6,10,4,2,9,8,1,8,8,5,2,9,8,2,3,1,3,5,10,1,5,5,8,4,6,2,10,8,8,6]
expected = 8;
console.log(expected, main(index, listA, listB));



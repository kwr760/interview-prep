// https://practice.geeksforgeeks.org/problems/stack-using-two-queues/1

export class Queue {
    constructor(){
        this.arr = [];
        this.front = 0;
    }

    push(a){
        this.arr.push(a);
    }

    pop(){
        if(this.arr.length !== this.front){
            let x = this.arr[this.front];
            this.front++;
            return x;
        }
        else
            return -1;
    }

    front_ele(){
        return this.arr[this.front];
    }

    empty(){
        if(this.arr.length !== this.front)
            return false;
        else
            return true;
    }
}

export class QueueStack {
  constructor(){
    this.q1 = new Queue();
    this.q2 = new Queue();
  }

  push(x){
    this.q1.push(x);
  }

  pop(){
    let data = this.q1.pop();
    let last = data;
    while (!this.q1.empty()) {
      if (data !== -1) {
        this.q2.push(data)
        data = this.q1.pop();
        last = data;
      }
    }
    this.q1 = this.q2;
    this.q2 = new Queue();
    return last;
  }
}

// export const solution = () => {
//   const queue = () => {
//     const q = [];
//     return {
//       enqueue: (data) => {
//         q.unshift(data);
//       },
//       dequeue: () => {
//         if (q.length) {
//           return q.pop();
//         }
//         return -1;
//       },
//     };
//   }
//
//   let fakeStack = queue();
//   return {
//     push: (data) => {
//       fakeStack.enqueue(data);
//     },
//     pop: () => {
//       const temp = queue();
//       let data = fakeStack.dequeue();
//       let last = data;
//       while (data !== -1) {
//         data = fakeStack.dequeue();
//         if (data !== -1) {
//           temp.enqueue(data)
//           last = data;
//         }
//       }
//       fakeStack = temp;
//       return last;
//     },
//   };
// }

class Queue {
    constructor() {
       this.enqueueStack = [];
       this.dequeueStack = [];
    }
    enqueue(item) {
       this.enqueueStack.push(item);
    }
    dequeue() {
       if (this.dequeueStack.length === 0) {
          while (this.enqueueStack.length > 0) {
             const item = this.enqueueStack.pop();
             this.dequeueStack.push(item);
          }
       }
       return this.dequeueStack.pop();
    }
 }
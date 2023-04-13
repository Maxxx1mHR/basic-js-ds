const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor () {
    // this.quene = [];
    // this.head = 0;
    // this.tail = 0;
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.head

  }


  enqueue(data) {
    // throw new NotImplementedError('Not implemented');
    // this.quene[this.tail] = data;
    // this.tail++;
    const item = new ListNode(data);
    if(!this.head) {
      this.head = item;
    } else {
      this.tail.next = item;
    }
    this.tail = item;
  } 

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // let item = this.quene[this.head];
    // const index = this.quene.indexOf(item);
    // this.quene.splice(index, 1);
    // return item;
    let {value} = this.head;
    this.head = this.head.next;

    return value;
  }
}



module.exports = {
  Queue
};


// let tmp = [1,2,3];
// tmp.splice(0,1)
// console.log(tmp);
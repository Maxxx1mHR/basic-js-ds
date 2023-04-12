const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor() {
    this.items = [];
    this.size = 0;
  }

  push(data) {
    this.items[this.size] = data;
    this.size++;
  }

  pop() {
      let item = this.items[this.size - 1];
      const index = this.items.indexOf(item);
      this.items.splice(index, 1);
      this.size--;
      return item;
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

module.exports = {
  Stack
};

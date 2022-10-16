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
  constructor() {
    this.head = null;
    this.length = 0;

  }
  getUnderlyingList() {
    let current = this.head;
    return current;
  }

  enqueue(value) {
    let node = new ListNode(value);
    let current = this.head;

    //if current not true (our list is empty))
    if (!current) {
      //head is our new created node
      this.head = node;
      this.length++;
    }

    //if list is not empty
    else {
      //if there is current.next
      while (current.next) {
        current = current.next;
      }
      //if current.next === null, than current.next is our created node
      current.next = node;
      this.length++;
    }
  }

  dequeue() {
    //get current node
    let current = this.head;
    //current.next will be header-pointer 
    this.head = current.next;
    this.length--;

    return current.value;
  }
}

module.exports = {
  Queue
};

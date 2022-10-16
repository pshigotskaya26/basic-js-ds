const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let prev = null;
  let current = l;

  while (current) {
    //if current is not k
    if (current.value !== k) {
      prev = current;
      current = current.next;
    }
    //if current is k
    else {
      //if current === k and replace in middle
      if (prev && current.next) {
        prev.next = current.next;
        current = current.next;
      }
      //if current === k and current is last element
      else if (prev && !current.next) {
        prev.next = null;
        return l;
      }
      //if current === k and current is first element
      else if (!prev) {
        l = current.next;
        prev = null;
        current = current.next;
      }
    }
  }
  return l;
}

module.exports = {
  removeKFromList
};

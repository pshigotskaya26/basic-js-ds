const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeHead = null;
  }

  root() {
    return this.treeHead;
  }

  add(data) {
    this.treeHead = addNode(this.treeHead, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
 
      if (data < node.data) {
        node.left = addNode(node.left, data);
      }
      else if (data > node.data) {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    function searchNode(node, data) {
      if (!node) {
        return false;
      }

      if (data < node.data) {
        return searchNode(node.left, data);
      }

      else if (data > node.data) {
        return searchNode(node.right, data);
      }
      else {
        return true;
      } 
    }
    return searchNode(this.treeHead, data);
  }

  find(data) {
    function findData(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        return findData(node.left, data);
      }
      else if (data > node.data) {
        return findData(node.right, data);
      }
      else {
        return node;
      }
    }
    return findData(this.treeHead, data);
  }

  remove(data) {
    function removeNodeValue(node, data) {
      if (!node) {
        return null;
      }

      //if our value is less than value of node
      if (data < node.data) {
        node.left = removeNodeValue(node.left, data);
        return node;
      }
      //if our value is more than value of node
      else if (data > node.data) {
        node.right = removeNodeValue(node.right, data);
        return node;
      }
      //if our value equals value of node
      else {
        //if node.left and node.rigth dont't exist
        if (!node.left && !node.right) {
          return null;
        }
        //if node.rigth doesn't exist
        if (!node.right) {
          node = node.left;
          return node;
        }
        //if node.left doesn't exist
        if (!node.left) {
          node = node.right;
          return node;
        }
         //if node.left and node.rigth exist
        
          //find min among right-subtree
          let minNodeFromRight = node.right;

          while (minNodeFromRight.left) {
            minNodeFromRight = minNodeFromRight.left;
          }

          node.data = minNodeFromRight.data;
          //remove minvalue among right-subtree
          node.right = removeNodeValue(node.right, minNodeFromRight.data);
          //return all update subtree
          return node;
      }
    }
    this.treeHead = removeNodeValue(this.treeHead, data);
  }

  min() {
    if (!this.treeHead) {
      return null;
    }
    else {
      let node = this.treeHead;

      while (node.left) {
        node = node.left;
      }
      return node.data;
    }
  }

  max() {
    if (!this.treeHead) {
      return null;
    }
    else if (this.treeHead) {
      let node = this.treeHead;
      while (node.right) {
        node = node.right;
      }
      return node.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};
const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

// class Node
// {
//     constructor(data)
//     {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

class BinarySearchTree {

  constructor() {
    this.root_ = null;
}

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.root_;
  }

  isEmpty() {
    return this.root_ === null
  }


  add(value) {
      const newNode = new Node(value)
      if(this.isEmpty()) {
        this.root_ = newNode
      } else {
       this.addNode(this.root_, newNode)
      }
    }

  addNode(root, newNode) {
    if(newNode.value < root.value) {
      if(root.left === null) {
        root.left = newNode
      } else {
        this.addNode(root.left, newNode)
      }
    } else {
      if(root.right === null) {
        root.right = newNode
      } else {
        this.addNode(root.right, newNode)
      }
    }
  }


  has(value) {
    return Boolean(this.findNode(this.root_,value))
  }

  find(value) {
    return this.findNode(this.root_, value) || null
  }

  findNode(root, value) {
    if(!root) {
      return false
    } else {
      if (root.value === value) {
        return root
      } else if (value < root.value) {
        return this.findNode(root.left, value)
      } else {
        return this.findNode(root.right, value)
      }
    }
  }



  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};



// class Node {
//   constructor(value) {
//       this.value = value
//       this.left = null
//       this.right = null
//   }
// }

// class BinarySearchTree {
//   constructor() {
//       this.root = null
//   }

//   isEmpty() {
//     return this.root === null
//   }

//   add(value) {
//     const newNode = new Node(value)
//     if(this.isEmpty()) {
//       this.root = newNode
//     } else {
//       this.addNode(this.root, newNode)
//     }
//   }

//   addNode(root, newNode) {
//     if(newNode.value < root.value) {
//       if(root.left === null) {
//         root.left = newNode
//       } else {
//         this.addNode(root.left, newNode)
//       }
//     } else {
//       if(root.right === null) {
//         root.right = newNode
//       } else {
//         this.addNode(root.right, newNode)
//       }
//     }
//   }

//   find(value) {
//     return this.findNode(this.root, value) || null
//   }

//   findNode(root, value) {
//     if(!root) {
//       return false
//     } else {
//       if (root.value === value) {
//         return value
//       } else if (value < root.value) {
//         return this.findNode(root.left, value)
//       } else {
//         return this.findNode(root.right, value)
//       }
//     }
//   }

// }

// const bst = new BinarySearchTree()
// // console.log('Tree is empt?', bst.isEmpty());

// bst.add(2);
// bst.add(7);
// bst.add(1);
// bst.add(8);
// bst.add(4);
// bst.add(32);
// bst.add(12);
// bst.add(14);
// // console.log('Tree is empt?', bst.isEmpty());
// console.log(bst.find(33));
// console.log(bst.find(1337));
// console.log(bst.find(42));
// console.log(bst.find(14));

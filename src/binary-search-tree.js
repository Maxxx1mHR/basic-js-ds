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
    this.head = null;
}

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.head;
  }


  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    }
    let cur = this.head;
    while (cur) {
      if (newNode.data > cur.data) {
        if (cur.right === null) {
          cur.right = newNode;
        }
      } else {
        if (cur.left === null) {
          cur.left = newNode;
        }
      }
      return cur
    }


    // while (cur) {
    //   if (newNode.data < cur.data) {
    //     if(cur.left === null) {
    //       cur.left === newNode;
    //   } else {

    //   }
    // }

    // return this.head;


    // while (cur) {
    //   if (newNode.data > cur.data) {
    //     if (cur.right === null) {
    //       cur.right = newNode;
    //       return;
    //     }
    //     cur = cur.right;
    //   } else {
    //     if (cur.left === null) {
    //       cur.left = newNode;
    //       return;
    //     }
    //     cur = cur.left;
    //   }
    // }

    // return cur;



  }




  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(this.head === null) {
      return null;
    }

    let cur = this.head;

    while(cur) {
      if(data > cur.data) {
        cur = cur.right;
      } else if (data < cur.data) {
        cur = cur.left;
      } else {
      }
      return cur;
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
//   constructor(data) {
//       this.data = data; // node value
//       this.left = null;   // left node child reference
//       this.right = null; // right node child reference
//   }
// }

// class BinarySearchTree {
//   constructor() {
//       this.root = null; // корень bst
//   }
// }

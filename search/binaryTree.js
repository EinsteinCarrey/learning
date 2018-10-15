/* Binary Search Tree */

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    searchTree(data, node = this.root){
        if(data === node.data){
            return node;
        }
        if (data < node.data) {
            return !node.left ? node : this.searchTree(node.left);
        }else {
            return !node.right ? node: this.searchTree(node.right);
        }
    };

    addNode(data) {
        const node = this.root;
        if (!node) {
            this.root = new Node(data);
        } else {
            const parentNode = this.searchTree(data);
            const newNode = new Node(data);
            parentNode.data > data ? parentNode.left = newNode: parentNode.right = newNode;
        }
    }

    findMin(node = this.root) {
        let current = node;
        while (current.left) {
            current = current.left;
        }
        return current;
    }

    findMax(node = this.root) {
        let current = node;
        while (current.right) {
            current = current.right;
        }
        return current;
    }

    isPresent(data) {
        return this.searchTree(data).data === data;
    }

    remove(data) {
        if(!this.isPresent(data)){
            console.log( 'node does not exist');
        }

        let nodeToRemove = this.searchTree(data);
        if(!nodeToRemove.left){
            nodeToRemove = nodeToRemove.right;
        }
        if(!nodeToRemove.right){
            nodeToRemove = nodeToRemove.left;
        }

        const smallestNodeToTheRight = this.findMin(nodeToRemove.right);
        nodeToRemove = smallestNodeToTheRight;
    }

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }

    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }

    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }

    inOrder() {
        if (this.root == null) {
            return null;
        } else {
            var result = new Array();

            function traverseInOrder(node) {
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right);
            }

            traverseInOrder(this.root);
            return result;
        }
        ;
    }

    preOrder() {
        if (this.root == null) {
            return null;
        } else {
            var result = new Array();

            function traversePreOrder(node) {
                result.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);
            };
            traversePreOrder(this.root);
            return result;
        }
        ;
    }

    postOrder() {
        if (this.root == null) {
            return null;
        } else {
            var result = new Array();

            function traversePostOrder(node) {
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right);
                result.push(node.data);
            };
            traversePostOrder(this.root);
            return result;
        }
    }

    levelOrder() {
        let result = [];
        let Q = [];
        if (this.root != null) {
            Q.push(this.root);
            while (Q.length > 0) {
                let node = Q.shift();
                result.push(node.data);
                if (node.left != null) {
                    Q.push(node.left);
                }
                ;
                if (node.right != null) {
                    Q.push(node.right);
                }
                ;
            }
            ;
            return result;
        } else {
            return null;
        }
        ;
    };
}


const bst = new BinarySearchTree();

bst.addNode(1);
bst.addNode(20);
// bst.addNode(17);
// bst.addNode(16);
// bst.addNode(23);
// bst.addNode(23);
console.log(bst);
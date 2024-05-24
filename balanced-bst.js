// Take an array, take the middle point and use it as root node 
// Take left side and take the middle, make it left node
// Take right side and take the middle, make it right node

class Node {
    constructor(data, left=null, right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    create(array) {
        let inputArr =  mergeSort(array)

        function add(arr) {
            if (arr.length === 0) {
                return null
            }

            const mid = Math.floor(arr.length / 2)
            const node = new Node(arr[mid])

            node.left = add(arr.slice(0, mid))
            node.right = add(arr.slice(mid + 1, arr.length))

            return node
        }
        return this.root = (add(inputArr))
    }

    insert(num) {
        let node = this.root
        const newNode = new Node(num)

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        function traverse(currentNode) {
            if (num < currentNode.data) {
                if (currentNode.left === null) {
                    currentNode.left = newNode
                    return
                } else {
                    traverse(currentNode.left)
                }
            } else if (num > currentNode.data) {
                if (currentNode.right === null) {
                    currentNode.right = newNode
                    return
                } else {
                    traverse(currentNode.right)
                }
            }
        }
        traverse(node)
    }

    remove(value) {
        this.root = this.removeNode(this.root, value)
    }

    removeNode(current, value) {
        
        if (current === null) {
            return current
        }

        if (current.data === value) {
            if (current.left === null && current.right === null) {
                return null
            } else if (current.left === null) {
                return current.right
            } else if (current.right === null) {
                return current.left
            } else {
                let tempNode = this.kthNode(current.right)
                current.data = tempNode.data
                current.right = this.removeNode(tempNode.right, tempNode.data)
                return current
            }
        }

        if (current.data > value) {
            current.left = this.removeNode(current.left, value)
            return current
        } else {
            current.right = this.removeNode(current.right, value) 
            return current
        }
    }

    kthNode(node) {
        while (node.left) {
            node = node.left
        }
        return node
    }

    

}

// Test MergeSort
let arr = [1, 4, 3, 2, 6]
orderedArr = mergeSort(arr)
// console.log(orderedArr)

function mergeSort(arr) {
    if (arr.length <= 1) return arr

    let m = Math.floor(arr.length / 2)
    let l = arr.slice(0, m)
    let r = arr.slice(m, arr.length)

    return merge(mergeSort(l), mergeSort(r))
}
function merge(left, right) {
    let result = []
    let lIndex = 0
    let rIndex = 0

    while (lIndex < left.length && rIndex < right.length) {
    if (left[lIndex] < right[rIndex]) {
            result.push(left[lIndex])
            lIndex++
        } else if (left[lIndex] > right[rIndex]) {
            result.push(right[rIndex])
            rIndex++
        } else {
            result.push(left[lIndex]);
            lIndex++;
            rIndex++;
        }
    }

    while (lIndex < left.length) {
        if (result.length === 0 || result[result.length - 1] != left[lIndex]) {
            result.push(left[lIndex])
            lIndex++
        } else {
            lIndex++
        }
    }

    while (rIndex < right.length) {
        if (result.length === 0 || result[result.length - 1] != right[rIndex]) {
        result.push(right[rIndex])
        rIndex++
        } else {
            rIndex++
        }
    }

    return result
}

// Test BST 
let testBST = new Tree
testBST.create([1, 7, 4, 23, 8, 9, 8, 8])


const prettyPrint = (node, prefix = "", isLeft = true) => {
   if (node === null) {
     return;
   }
   if (node.right !== null) {
     prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
   }
   console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
   if (node.left !== null) {
     prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
   }
};

testBST.insert(5)
testBST.remove(4)
prettyPrint(testBST.root)
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

}

function mergeSort(arr) {
    if (arr.length <= 1) return arr

    let m = Math.floor(arr.length / 2)
    let l = arr.slice(0, m)
    let r = arr.slice(m, arr.length)

    return merge(mergeSort(l), mergeSort(r), arr)
}

function merge(left, right, arr) {
    let arrIndex = 0
    let lIndex = 0
    let rIndex = 0

    console.log(right)

    while (lIndex < left.length && rIndex < right.length) {
        if (left[lIndex] <= right[rIndex]) {
            arr[arrIndex] = left[lIndex]
            arrIndex++
            lIndex++
        } else {
            arr[arrIndex] = right[rIndex]
            arrIndex++
            rIndex++
        }
    }

    while (lIndex < left.length) {
        arr[arrIndex] = left[lIndex]
        arrIndex++
        lIndex++
    }

    while (rIndex < right.length) {
        arr[arrIndex] = right[rIndex]
        arrIndex++
        rIndex++
    }

    return arr
}


let arr = [1, 4, 3, 2, 6]
mergeSort(arr)
console.log(arr)
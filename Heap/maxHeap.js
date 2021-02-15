class MaxHeap {
    heap = [];

    insert(value) {
        if (this.heap.length > 0) {
            this.heap.push(value);
            this.siftUp();
        } else {
            this.heap.push(value);
        }
    }

    getParentIndex(childIndex) {
        return Math.floor(childIndex - 1 / 2);
    }

    getMaxChildIndex(parentIndex) {
        let leftChildIndex = parentIndex * 2 + 1;
        let rightChildIndex = parentIndex * 2 + 2;
        let maxChildVal = Math.max(this.heap[leftChildIndex], this.heap[rightChildIndex] || -1);
        return this.heap[leftChildIndex] === maxChildVal ? leftChildIndex : rightChildIndex;
    }

    swapArrayElem(array, indexA, indexB) {
        let temp = array[indexA];
        array[indexA] = array[indexB];
        array[indexB] = temp;
    }

    siftUp() {
        let valueParentIndex = this.getParentIndex(this.heap.length - 1);
        let valueIndex = this.heap.length - 1;
        while (valueParentIndex >= 0 && this.heap[valueParentIndex] < this.heap[valueIndex]) {
            this.swapArrayElem(this.heap, valueIndex, valueParentIndex);
            valueIndex = valueParentIndex;
            valueParentIndex = this.getParentIndex(valueIndex);
        }
    }

    siftDown() {
        let valueParentIndex = 0;
        let maxChildIndex = this.getMaxChildIndex(valueParentIndex);
        while (maxChildIndex < this.heap.length && this.heap[valueParentIndex] < this.heap[maxChildIndex]) {
            this.swapArrayElem(this.heap, maxChildIndex, valueParentIndex);
            valueParentIndex = maxChildIndex;
            maxChildIndex = this.getMaxChildIndex(valueParentIndex);
        }
    }

    createMaxHeap(array) {
        if (array.length) {
            for (var i = 0; i < array.length; i++) {
                this.insert(array[i]);
            }
        }
    }

    sort() {

    }

    delete() {
        this.swapArrayElem(this.heap, 0, this.heap.length - 1);
        let deletedVal = this.heap.pop();
        this.siftDown();
        return deletedVal;
    }

    display() {
        console.log(this.heap);
    }
}

var mh = new MaxHeap();
mh.createMaxHeap([20, 3, 5, 7, 30, 4, 19, 12]);
mh.display();
mh.insert(40);
mh.display();
console.log(mh.delete());
mh.display();
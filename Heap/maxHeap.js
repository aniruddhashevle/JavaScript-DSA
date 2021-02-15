class MaxHeap {
    heap = [];

    insert(value) {
        if (this.heap.length > 0) {
            this.heap.push(value);
            let valueParentIndex = this.getParentIndex(this.heap.length - 1);
            let valueIndex = this.heap.length - 1;
            while (valueParentIndex >= 0 && this.heap[valueParentIndex] < this.heap[valueIndex]) {
                this.swapArrayElem(this.heap, valueIndex, valueParentIndex);
                valueIndex = valueParentIndex;
                valueParentIndex = this.getParentIndex(valueIndex);
            }
        } else {
            this.heap.push(value);
        }
    }

    getParentIndex(childIndex) {
        let index = childIndex / 2;
        return index !== Math.floor(index) ? Math.floor(index) : index - 1;
    }

    swapArrayElem(array, indexA, indexB) {
        let temp = array[indexA];
        array[indexA] = array[indexB];
        array[indexB] = temp;
    }

    createMaxHeap(array) {
        if (array.length) {
            for (var i = 0; i < array.length; i++) {
                this.insert(array[i]);
            }
        }
    }

    delete() {

    }

    display() {
        console.log(this.heap);
    }
}

var mh = new MaxHeap();
mh.createMaxHeap([20, 5, 7, 30, 4, 19, 12]);
mh.display();
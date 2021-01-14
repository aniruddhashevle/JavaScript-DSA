/**
 * Quick Sort:
 * 
 * Divide and conquer strategy
 * This sorting will partition the array into two parts(left and right).
 * This partition is done by placing a pivot element at correct(or final) place in the array.
 * 
 * Complexity: 
 * Worst: O(n^2) : When the pivot is the smallest/greatest of all elems
 *  Best: O(n*log n) : When the pivot is somewhere around the middle compared to other elems
 *  Avg: O(n*log n)
 * 
 * Auxiliary Space(temporary space): O(2)
 */
var a = [100, 50, 200, 25, 300, 4, 125, 80, 430];
var pivotPosition = 0;
var pivot = a[pivotPosition];
var sorted = quickSort(a, 0, a.length - 1);

function divideAndSort(a, low, high) {
    var i = low - 1;
    var pivot = a[high];
    for (var j = low; j < high; j++) {
        if (a[j] < pivot) {
            i++;
            if (i !== j) { // skipping unnecessary swap
                let t = a[j];
                a[j] = a[i];
                a[i] = t;
            }
        }
    }
    if (i + 1 !== high) { // skipping unnecessary swap
        let t = a[i + 1];
        a[i + 1] = pivot;
        a[high] = t;
    }
    return i + 1;
}

function quickSort(a, low, high) {
    if (low < high) {
        var p = divideAndSort(a, low, high);
        quickSort(a, low, p - 1);
        quickSort(a, p + 1, high);
    }
    return a;
}

console.log("Sorted in ascending order", sorted);


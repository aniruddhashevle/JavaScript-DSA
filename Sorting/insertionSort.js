/**
 * Insertion Sort:
 * 
 * 1. 2 partitions sorted and unsorted. We've to insert elements from the unsorted partition to the sorted one. 
 *    This technique works similar to the way you sort playing cards in your hands.
 * 2. Insertion sort is very similar to selection sort.
 *    However, the fundamental difference between the two algorithms is that insertion sort scans backwards from the current key,
 *    while selection sort scans forwards. This results in selection sort making the first k elements the k smallest elements
 *    of the unsorted input, while in insertion sort they are simply the first k elements of the input.
 * 3. The primary advantage of insertion sort over selection sort is that selection sort must always scan all remaining elements
 *    to find the absolute smallest element in the unsorted portion of the list, while insertion sort requires only a single
 *    comparison when the (k + 1)-st element is greater than the k-th element; when this is frequently true (such as if the input
 *    array is already sorted or partially sorted), insertion sort is distinctly more efficient compared to selection sort.
 * 
 * Complexity: O(n^2)
 * 
 * Auxiliary Space(temporary space): O(1)
 * 
 * Use case:
 * Insertion sort is used when the number of elements is small. It can also be useful when the input array is almost sorted, 
 * only a few elements are misplaced in a complete big array.
 * This sorting technique is really good for small arrays
 */
var a = [50, 4, 2, 58, 8]
for (var i = 1; i < a.length; i++) {
    let x = a[i];
    j = i;
    while (j > 0 && a[j - 1] > x) {
        a[j] = a[j - 1];
        j--;
    }
    a[j] = x;
}
console.log("Sorted in ascending order", a);

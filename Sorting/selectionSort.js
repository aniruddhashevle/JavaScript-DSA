/**
 * Selection Sort:
 * 
 * The good thing about selection sort is it never makes more than O(n) swaps and can be useful when memory write
 * is a costly operation.
 * 
 * Complexity: O(n^2)
 * 
 * Auxiliary Space(temporary space): O(1)
 * 
 * Problem:
 * if two objects with equal or same keys appear in the same order in sorted output as they appear in the input array to be sorted.
 * But using selection sort its not the case.
 * Hence there is a stable selection sort technique which is similar to the insertion sort technique.
 */
var a = [50, 4, 2, 58, 8]
for (var i = 0; i < a.length - 1; i++) {
    for (var j = i + 1; j < a.length; j++) {
        if (a[i] > a[j]) {
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}
console.log("Sorted in ascending order", a);
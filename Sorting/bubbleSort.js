/**
 * Bubble Sort:
 * 
 * Simple sorting technique also called sinking sort.
 * The bubble sort gets its name because elements tend to move up into the correct order like bubbles rising to the surface.
 * Bubble sort also interacts poorly with modern CPU hardware. 
 * It produces at least twice as many writes as insertion sort, twice as many cache misses.
 * 
 * Complexity: O(n^2)
 * 
 * Auxiliary Space(temporary space): O(1)
 */
var a = [25, 2, 34, 4, 13];
for (var i = a.length - 2; i >= 0; i--) {
    for (var j = 0; j <= i; j++) {
        if (a[j] > a[j + 1]) {
            // swap
            let temp = a[j];
            a[j] = a[j + 1];
            a[j + 1] = temp;
        }
    }
}
console.log("Sorted in ascending order", a);


/**
 * Optimized Bubble Sor:
 * 
 * Complexity: 
 * Worst: O(n^2)
 * Best: O(n)
 */
var a = [25, 2, 34, 4, 13];
for (var i = a.length - 2; i >= 0; i--) {
    var swapped = false;
    for (var j = 0; j <= i; j++) {
        if (a[j] > a[j + 1]) {
            // swap
            let temp = a[j];
            a[j] = a[j + 1];
            a[j + 1] = temp;
            swapped = true;
        }
    }
    // if inner loop didn't swap anything, means the array is sorted, break the loop
    if (!swapped) {
        break;
    }
}
console.log("Sorted in ascending order", a);

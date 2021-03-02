/*

Find the nth root of a given number. With 
+/- 0.001 diff is allowed


num = 7, root = 3 => 1.9129311827723892
num = 64, root = 3 => 3.9999999999999996
num = 8, root = 3 => 2
num = 64, root = 4 => 3.9999999999999996
num = 256, root = 6 => 2.5189999999999992
*/

/**
 * 1st Solution
 * @param {Number} num 
 * @param {Number} root 
 */
function findNthRootOfNumber(num, root) {
    return getNthRoot(num, root, 0, num, unit = 1);
}

function getNthRoot(num, root, min, max, unit) {
    if (unit <= 0.0001) return min;
    let updatedUnit = min;
    while (Math.pow(updatedUnit, root) < num && updatedUnit < max) {
        updatedUnit += unit;
    }
    min = updatedUnit - unit;
    unit = unit / 10;
    return getNthRoot(num, root, min, updatedUnit, unit);
}

console.log(findNthRootOfNumber(7, 3))

/**
 * 2nd Solution
 * @param {Number} num 
 * @param {Number} root 
 */
function findNthRootOfNumber(num, root) {
    return Math.pow(num, 1 / root);
}


console.log(findNthRootOfNumber(7, 3))
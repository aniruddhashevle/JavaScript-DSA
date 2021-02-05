function linkedList(arr) {
    return arr.reduceRight((next, value) => ({ value, next }), null);
}

l = [3, 1, 2, 3, 4, 5];

console.log(linkedList(l));




// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K, L) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (K + L > A.length) {
        return -1;
    }
    let AlicePossibleApplesCollection = [], BobPossibleApplesCollection = [];
    for (let tree = 0; tree <= A.length - K; tree++) {
        let totalApples = getTotalApplesSum(A, tree, K);
        AlicePossibleApplesCollection.push(totalApples);
    }
    for (let tree = 0; tree <= A.length - L; tree++) {
        let totalApples = getTotalApplesSum(A, tree, L);
        BobPossibleApplesCollection.push(totalApples);
    }
    console.log('AlicePossibleApplesCollection', AlicePossibleApplesCollection, BobPossibleApplesCollection);
    return getMaxAppleCollection(A, AlicePossibleApplesCollection, BobPossibleApplesCollection, K, L);
}

function getTotalApplesSum(A, counts, noOfConsecutiveTrees) {
    let totalApples = 0;
    let times = 0;
    while (times < noOfConsecutiveTrees) {
        totalApples += A[counts];
        counts++;
        times++;
    }
    return totalApples;
}

function getMaxAppleCollection(A, AlicePossibleApplesCollection, BobPossibleApplesCollection, K, L) {
    const getMaxIndexFromAliceCollection = AlicePossibleApplesCollection.indexOf(Math.max(...AlicePossibleApplesCollection));
    const getMaxIndexFromBobCollection = BobPossibleApplesCollection.indexOf(Math.max(...BobPossibleApplesCollection));
    let counter = 0;
    let possibleTreeIndexesForAlice = [];
    while (counter < K) {
        possibleTreeIndexesForAlice.push(getMaxIndexFromAliceCollection + counter);
        counter++;
    }
    counter = 0;
    let possibleTreeIndexesForBob = [];
    while (counter < L) {
        possibleTreeIndexesForBob.push(getMaxIndexFromBobCollection + counter);
        counter++;
    }
    let isSameCollection = false;
    for (let i = 0; i < possibleTreeIndexesForAlice.length; i++) {
        if (possibleTreeIndexesForBob.includes(possibleTreeIndexesForAlice[i])) {
            isSameCollection = true;
        }
    }
    if (!isSameCollection) {
        return finalSum(A, possibleTreeIndexesForAlice, possibleTreeIndexesForBob);
    }
}

function finalSum(A, possibleTreeIndexesForAlice, possibleTreeIndexesForBob) {
    let sum = 0;
    for (let i = 0; i < possibleTreeIndexesForAlice.length; i++) {
        sum += A[possibleTreeIndexesForAlice[i]];
    }
    for (let i = 0; i < possibleTreeIndexesForBob.length; i++) {
        sum += A[possibleTreeIndexesForBob[i]];
    }
    return sum;
}

console.log('solution', solution([6, 1, 4, 6, 3, 2, 7, 4], 3, 2));
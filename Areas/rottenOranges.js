var ORANGES = [
    [2, 1, 0, 2, 1],
    [1, 0, 1, 2, 1],
    [1, 0, 0, 2, 1],
];

// var ORANGES = [
//     [2, 1, 0, 0, 2],
//     [0, 0, 1, 1, 2],
//     [1, 0, 0, 0, 1],
// ];

ORANGES = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
];

function findTimeFrames(ORANGES) {
    let time = -1, rowLen = ORANGES.length, colLen = ORANGES[0].length;
    let rottenOrangesPositions = []; // O(n * n)
    // O (n * n)
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (ORANGES[row][col] === 2) {
                rottenOrangesPositions.push({ timeFrame: 0, position: [row, col] });
            }
        }
    }
    time = getTime(ORANGES, rottenOrangesPositions);
    // O (n * n)
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (ORANGES[row][col] === 1) {
                return -1;
            }
        }
    }
    return time;
}

console.log('findTimeFrames', findTimeFrames(ORANGES));

function getTime(ORANGES, rottenOrangesPositions) {
    let timeFrame = 0;
    // O(n)
    while (rottenOrangesPositions.length) {
        console.log('rottenOrangesPositions', rottenOrangesPositions)
        const currentPos = rottenOrangesPositions.shift();
        const adjPos = findAdj(ORANGES, currentPos);
        rottenOrangesPositions = [
            ...rottenOrangesPositions,
            ...adjPos,
        ];
        timeFrame = currentPos.timeFrame;
    }
    return timeFrame;
}

function findAdj(ORANGES, currentPos) {
    const {
        timeFrame,
        position: [
            row,
            col,
        ],
    } = currentPos;
    let allCords = [
        [row + 1, col],
        [row - 1, col],
        [row, col + 1],
        [row, col - 1],
        // [row - 1, col - 1],
        // [row + 1, col + 1],
        // [row - 1, col + 1],
        // [row + 1, col - 1],
    ];
    // O(n)
    allCords = allCords.filter(([rowVal, colVal]) => ORANGES[rowVal] && ORANGES[rowVal][colVal] === 1);
    // O(n)
    return allCords.map((cords) => {
        ORANGES[cords[0]][cords[1]] = 2;
        return { timeFrame: timeFrame + 1, position: cords }
    });
}

const divide = (firstNumber, secondNumber) => {
    try {
        if (secondNumber === 0) {
            console.log('Can not divide by 0!');
            return;
        }
        const result = firstNumber / secondNumber;
        return result;
    } catch (e) {
        console.log('Exception: ', e);
    }
}

console.log('divide', divide(6, 0));


function closureTest(num1) {
    return () => {
        return num1 * num1;
    };
}

closureTest(2)();



// compare objects
var objA = {
    a: {
        b: {
            c: [
                {

                }
            ]
        }
    }
};

function compareObjs(objA, objB) {
    // loop
      // type of value
        // array
        // obj
    let isIdentical = false;
    Object.keys(objA).forEach((objItem) => {
        if(objB.hasOwnProperty(objItem)) {
            const typeOfVal = typeof objA[objItem];
            switch(typeOfVal) {
                case 'string': isIdentical = objA[objItem] === objB[objItem];
                case 'array': isIdentical = compareArray(objA[objItem], objB[objItem]);
                case 'object': isIdentical = compareObjs(objA[objItem], objB[objItem]);
                case 'number': isIdentical = objA[objItem] === objB[objItem];
                default: {};
            };
        }
    });
    return isIdentical;
}

function compareArray() {
    
}
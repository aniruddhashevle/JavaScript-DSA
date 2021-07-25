/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (head) {
        head = divideList(head);
    }
    return head;
};

function divideList(head) {
    if (head.next) {
        if (head.next.next !== null) {
            var { left, right } = findMiddle(head);
            if (left) {
                left = divideList(left);
                left = mergeSort(left);
            }
            if (right) {
                right = divideList(right);
                right = mergeSort(right);
            }
            if (left && right) {
                head = merge(left, right);
            } else {
                head = left || right;
            }
        } else {
            head = mergeSort(head);
        }
    }
    return head;
}

function findMiddle(linkList) {
    var slowRef = linkList;
    var fastRef = linkList;
    var dividedLinkedList = new ListNode(slowRef.val);
    var lastRef = dividedLinkedList;
    while (fastRef.next !== null && slowRef.next) {
        slowRef = slowRef.next;
        lastRef.next = new ListNode(slowRef.val);
        lastRef = lastRef.next;
        if (fastRef.next.next !== null) {
            fastRef = fastRef.next.next;
        } else {
            fastRef = fastRef.next;
        }
    }
    return {
        right: slowRef.next,
        left: dividedLinkedList,
    };
}

function mergeSort(linkList) {
    var ref = new ListNode(linkList.val);
    if (linkList.next && linkList.val > linkList.next.val) {
        linkList = linkList.next;
        linkList.next = ref;
    }
    return linkList;
}

function merge(left, right) {
    var temp = last = null;
    while (!(left === null && right === null)) {
        if (left && right) {
            const isLeftSmallOrEqual = left.val <= right.val;
            const smallerOrEqualVal = isLeftSmallOrEqual ? left.val : right.val;
            if (!temp) {
                temp = new ListNode(smallerOrEqualVal);
                last = temp;
            } else {
                last.next = new ListNode(smallerOrEqualVal);
                last = last.next;
            }
            if (isLeftSmallOrEqual) {
                left = left.next;
            } else {
                right = right.next;
            }
        } else if (left) {
            last.next = new ListNode(left.val);
            left = left.next;
            last = last.next;
        } else if (right) {
            last.next = new ListNode(right.val);
            right = right.next;
            last = last.next;
        }
    }
    return temp;
}

var oddEvenList = function (head) {
    var temp = head, tempEvenArr = [], tempOddArr = [], i = 0;
    while (temp) {
        i++;
        if (i % 2) {
            tempOddArr.push(temp.val);
        } else {
            tempEvenArr.push(temp.val);
        }
        temp = temp.next;
    }
    temp = head, i = 0, tempArr = [...tempOddArr, ...tempEvenArr];
    while (temp) {
        temp.val = tempArr[i++];
        temp = temp.next;
    }
    return head;
};
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    //var temp = head, multiLevels = [], i = 0, refNod = [];
    return getChildLevel(head);
};

var getChildLevel = function (head) {
    var temp = tempRef = head;
    while (temp) {
        if (temp.child) {
            var tempChild = temp.child;
            while (tempChild) {
                tempRef.next = tempChild;
                getChildLevel(tempChild, tempRef);
                tempChild = tempChild.next;
            }
        }
        temp = temp.next;
        tempRef = tempRef.next;
    }
    return tempRef;
}


var splitListToParts = function (root, k) {
    var temp = root, tempArr = [], splitArr = [];
    while (temp) {
        tempArr.push(temp.val);
        temp = temp.next;
    }
    var minElemToSplit = Math.floor(tempArr.length / k);
    var extraElems = tempArr.length % k;
    var fromIndex = 0;
    var toIndex = k;
    if (tempArr.length < k && extraElems !== 0) {
        for (var i = 0; i < extraElems; i++) {
            splitArr.push([tempArr[i]]);
        }
    } else {
        for (var i = 0; i < minElemToSplit; i++) {
            if (i < extraElems) {
                splitArr.push(tempArr.slice(fromIndex, toIndex + 1));
                fromIndex = toIndex + 1;
                toIndex = toIndex + 1 + k;
            } else {
                splitArr.push(tempArr.slice(fromIndex, toIndex));
                fromIndex = toIndex;
                toIndex = toIndex + k;
            }
        }
    }
    var i = 0;
    var diff = k - splitArr.length;
    if (diff >= 0) {
        while (diff) {
            splitArr.push(null);
            diff--;
        }
    }
    var result = [];
    for (var i = 0; i < splitArr.length; i++) {
        var temp = null, tempRef = null;
        if (splitArr[i]) {
            for (var j = 0; j < splitArr[i].length; j++) {
                if (!tempRef) {
                    temp = new ListNode(splitArr[i][j]);
                    tempRef = temp;
                } else {
                    tempRef.next = new ListNode(splitArr[i][j]);
                    tempRef = tempRef.next;
                }
            }
        }
        result.push(temp);
    }
    return result;
};


/**
 * @param {number} capacity
 */
var DinnerPlates = function (capacity) {
    this.capacity = capacity;
    this.stackCollection = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function (val) {
    if (this.stackCollection.length === 0) {
        this.stackCollection[0] = [];
        this.stackCollection[0].push(val);
    } else {
        var spaceFound = false;
        for (var i = 0; i < this.stackCollection.length; i++) {
            if (this.stackCollection[i] && this.stackCollection[i].length < this.capacity) {
                this.stackCollection[i].push(val);
                spaceFound = true;
                break;
            }
        }
        if (!spaceFound) {
            this.stackCollection[i] = [];
            this.stackCollection[i].push(val);
        }
    }
    return null;
};

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function () {
    var popedElem = -1;
    if (this.stackCollection[this.stackCollection.length - 1]) {
        popedElem = this.stackCollection[this.stackCollection.length - 1].pop();
        if (this.stackCollection[this.stackCollection.length - 1].length === 0) {
            this.stackCollection[this.stackCollection.length - 1] = null;
            this.stackCollection = this.stackCollection.filter(x => x);
        }
    }
    return popedElem;
};

/** 
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function (index) {
    var popedElem = null;
    if (this.stackCollection[index]) {
        popedElem = this.stackCollection[index].pop();
        if (this.stackCollection[index].length === 0) {
            this.stackCollection[index] = null;
            this.stackCollection = this.stackCollection.filter(x => x);
        }
    }
    return popedElem;
};

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */

function longestSubstringWithoutDuplication(string) {
    var unique = string[0];
    for (var i = 0; i < string.length - 1; i++) {
        var j = i + 1, uniqueStr = string[i];
        while (j < string.length && string[i] !== string[j]) {
            uniqueStr += string[j];
            j++;
        }
        if (uniqueStr.length > 1 && uniqueStr.length > unique.length) {
            unique = uniqueStr;
            if (string[j] === string[j - 1]) {
                i = j - 1;
            } else {
                i = j - 2;
            }
        }
    }
    return unique;
}

function smallestSubstringContaining(bigString, smallString) {
    var smallest = bigString.length;
    for (var i = 0; i < bigString.length - 1 - smallString.length; i++) {
        let smallStr = "", j = i;
        let checkChars = smallString.split("");
        while (checkChars.length) {
            let index = checkChars.findIndex(x => x === bigString[j]);
            if (index !== -1) {
                smallStr += bigString[j];
                delete checkChars[index];
                checkChars = checkChars.filter(x => x);
            }
            j++;
        }
        if (smallStr.length < smallest.length) {
            smallest = smallStr;
        }
    }
    return smallest;
}

function longestBalancedSubstring(string) {
    var balancedIndex = string.indexOf("()"), count = 0;
    while (balancedIndex !== -1) {
        var i = balancedIndex - 1, j = balancedIndex + 1;
        count++;
        while (i >= 0 && j < string.length && string[i] === "(" && string[j] === ")") {
            count++;
            i--;
            j++;
        }
        balancedIndex = string.indexOf("()", j);
    }
    return count * 2;
}

function longestBalancedSubstring(string) {
    var balancedIndex = string.indexOf("()"),
        count = 0,
        testString = string;
    while (balancedIndex !== -1) {
        testString = string.split("");
        delete testString[balancedIndex];
        delete testString[balancedIndex + 1];
        testString = testString.filter(x => x);
        testString = testString.join("");
        balancedIndex = testString.indexOf("()");
        count++;
    }
    return count * 2;
}

var longestMountain = function (arr) {
    var result = 0, isMountain = false;
    for (var i = 0; i < arr.length - 1; i++) {
        var j = i, maxCount = 1;
        while (j < arr.length - 1 && arr[j] < arr[j + 1]) {
            maxCount++;
            j++;
        }
        while (maxCount > 1 && j < arr.length - 1 && arr[j] > arr[j + 1]) {
            maxCount++;
            j++;
            if (!isMountain) isMountain = true;
        }
        if (maxCount > 1 && maxCount > result) result = maxCount;
    }
    return (!result || !isMountain) ? 0 : result;
};

/**
 * @param {number[]} nums
 * @return {number}
 * [1,16,84,9,29,71,86,79,72,12]
 * [4,3,2,1,1,2,3,1]
 */
var minimumMountainRemovals = function (nums) {
    var temp = [...nums];
    temp.sort((a, b) => b - a);
    var k = 0, output = nums.length;
    var checkedIndices = [];
    while (k < temp.length) {
        var largestElem = temp[k], result = 0;
        var largerIndex = nums.indexOf(largestElem);
        while (checkedIndices.includes(largerIndex)) {
            var checked = checkedIndices.find(x => x === largerIndex);
            largerIndex = nums.indexOf(largestElem, checked + 1);
        }
        checkedIndices.push(largerIndex);
        if (largerIndex === 0 || largerIndex === nums.length - 1) {
            k++;
            continue;
        }
        let larger = smaller = largestElem;
        for (var i = largerIndex - 1; i > -1; i--) {
            let removedIndices = [];
            if (largestElem !== larger && i - 1 > -1 && nums[i] > larger && nums[i - 1] > larger) {
                result++;
                removedIndices.push(i + 1);
                if (removedIndices.includes(i + 2)) {
                    var m = i + 3;
                    while (m >= largerIndex && removedIndices.includes(m)) {
                        m++;
                    }
                    larger = nums[m];
                } else {
                    larger = nums[i + 2];
                }
                i = i + 1;
            } else {
                if (nums[i] >= larger) {
                    result++;
                } else {
                    larger = nums[i];
                }
            }
        }
        if (result || i === -1) {
            if ((result === 1 && largerIndex === 1) || (largerIndex === nums.length - 2 && nums[largerIndex] > smaller)) {
                k++;
                continue;
            }
            console.log('result', result);
            let removedIndices = [];
            for (var j = largerIndex + 1; j < nums.length; j++) {
                if (largestElem !== smaller && j + 1 < nums.length && nums[j] > smaller && nums[j + 1] > smaller) {
                    result++;
                    removedIndices.push(j - 1);
                    console.log('coming for before', j, nums[j], largerIndex, removedIndices, smaller);
                    if (removedIndices.includes(j - 2)) {
                        var m = j - 3;
                        while (m >= largerIndex && removedIndices.includes(m)) {
                            m--;
                        }
                        smaller = nums[m];
                    } else {
                        smaller = nums[j - 2];
                    }
                    j = j - 1;
                    console.log('coming for updated', j, nums[j], smaller);
                } else {
                    if (nums[j] >= smaller) {
                        removedIndices.push(j);
                        result++;
                    } else {
                        smaller = nums[j];
                    }
                }
            }
        }
        console.log('result0000', result);
        if (result && result < output) {
            output = result;
            console.log('output', output);
        }
        k++;
    }
    return output === nums.length ? 0 : output;
};


///fibonacci series : Memoization
var memo = {};
var fib = function (n) {
    if (n === 1 || n === 2) {
        return 1;
    } else {
        if (memo.hasOwnProperty(n)) {
            return memo[n];
        } else {
            let result = fib(n - 1) + fib(n - 2);
            memo = {
                ...memo,
                [n]: result,

            }
            return result;
        }
    }
}
console.log(fib(1000));

///fibonacci series : Bottoms Up
var memo = {};
var fib = function (n) {
    var arr = [1, 1], result = 0;
    for (var i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n - 1];
}
console.log(fib(1000));


var n = nums.length;
var left = [];
var right = [];
var result = 0;
for (var i = 1; i < n; i++) {
    for (var j = 0; j < i; j++) {
        if (nums[i] > nums[j])
            left[i] = Math.max(left[i], left[j] + 1);
    }

}

for (var i = n - 2; i > -1; i--) {
    for (var j = n - 1; j > i; j--) {

        if (nums[i] > nums[j])
            right[i] = Math.max(right[i], right[j] + 1);
    }
}
for (var i = 1; i < n; i++) {
    if (left[i] != 0 && right[i] != 0)
        result = Math.max(result, left[i] + right[i]);
}
return n - (result + 1);


var numSimilarGroups = function (strs) {
    var grps = [];
    var checkWith = strs[i + 1];
    for (var i = 0; i < strs.length - 1; i++) {
        var check = strs[i];
        var j = k = 0;
        while (check[j] === checkWith[k]) {
            j++;
            k++;
        }
        var charIndex = check.indexOf[checkWith[k]]
        if (charIndex !== -1) {
            let temp = check[j];
            check[j] = check[charIndex];
            check[charIndex] = temp;
        }
        if (check === checkWith) {
            grps.push([strs[i], checkWith]);
        }
    }
    return grps.length;
};



/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
    var n = mountainArr.length(), index = -1;
    var peak = findPeak(mountainArr, n, Math.floor((n - 1) / 2));
    var leftIndex = findIndex(0, peak, mountainArr, target);
    var rightIndex = findIndex(peak + 1, n - 1, mountainArr, target, false);
    if (leftIndex !== -1 && rightIndex !== -1) {
        index = Math.min(leftIndex, rightIndex);
    } else if (leftIndex !== -1) {
        index = leftIndex;
    } else if (rightIndex !== -1) {
        index = rightIndex;
    }
    return index;
};

var findIndex = function (left, right, mountainArr, target, ascOrder = true) {
    var index = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midElem = mountainArr.get(mid);
        if (midElem === target) {
            index = mid;
            break;
        } else if ((ascOrder && target < midElem) || (!ascOrder && target > midElem)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return index;
}

var findPeak = function (mountainArr, n, mid) {
    var midElem = mountainArr.get(mid), found = false;
    while (mid < n - 2 && mid > 1 && midElem < mountainArr.get(mid + 1)) {
        mid++;
        found = true;
        midElem = mountainArr.get(mid);
    }
    while (!found && mid < n - 2 && mid > 1 && midElem < mountainArr.get(mid - 1)) {
        mid--;
        midElem = mountainArr.get(mid);
    }
    return mid;
}



class MinMaxStack {
    peek() {
        return this.stack[this.top];
    }

    pop() {
        if (this.top > -1) {
            let poppedVal = this.stack.pop();
            this.top--;
            if (this.min === poppedVal) {
                let temp = [...this.stack];
                this.min = temp.sort((a - b) => a - b)[0];
            } else if (this.max === poppedVal) {
                let temp = [...this.stack];
                this.max = temp.sort((a - b) => b - a)[0];
            }
            return poppedVal;
        }
    }

    push(number) {
        if (this.top && this.top > -1) {
            this.stack[++this.top] = number;
            if (this.min > number) {
                this.min = number;
            }
            if (this.max < number) {
                this.max = number;
            }
        } else {
            this.stack = [];
            this.min = number;
            this.max = number;
            this.top = 0;
            this.stack[this.top] = number;
        }
    }

    getMin() {
        return this.max;
    }

    getMax() {
        return this.min;
    }
}

var stack = []; //  
const brackets = ["(", ")", "[", "]", "{", "}"];
for (var i = 0; i < string.length; i++) {
    if (brackets.includes(string[i])) {
        if (i === 0) {
            stack.push(string[i]);
        } else {
            let char = brackets.find(x => x === string[i]);
            let isOddIndex = char % 2 !== 0;
            let lastStackChar = stack[stack.length - 1];
            if (isOddIndex) {
                if (lastStackChar === brackets[char - 1]) {
                    stack.pop();
                } else {
                    stack.push(string[i]);
                }
            } else {
                stack.push(string[i]);
            }
        }
    }
}
return !!!stack.length;


function sunsetViews(buildings, direction) {
    var result = [], isEastDir = direct === "EAST", n = buildings.length;
    if (isEastDir) {
        buildings.reverse();
    }
    let max = 0;
    for (var i = 0; i < n; i++) {
        if (buildings[i] > max) {
            max = buildings[i];
            result.push(isEastDir ? n - 1 - i : i);
        }

    }
    return isEastDir ? result.reverse() : result;
}


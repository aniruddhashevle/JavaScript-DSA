class Node {
    constructor(data, isEndOfWord = false) {
        this.data = data;
        this.isEndOfWord = isEndOfWord;
        this.children = [];
    }
}

class Tries {
    root = [];

    add(word) {
        var parentNode = this.root.length ? { children: this.root } : null;
        this.insertChars(parentNode, word);
    }

    insertChars(parentNode, word) {
        for (var i = 0; i < word.length; i++) {
            var newCharNode = new Node(word[i], i === word.length - 1);
            if (parentNode) {
                if (parentNode.children.length) {
                    let dataPresent = parentNode.children.find(x => x.data === word[i]);
                    if (dataPresent) {
                        parentNode = dataPresent;
                    } else {
                        parentNode.children.push(newCharNode);
                        parentNode = newCharNode;
                    }
                } else {
                    parentNode.children.push(newCharNode);
                    parentNode = newCharNode;
                }
            } else {
                this.root.push(newCharNode);
                parentNode = newCharNode;
            }
        }
    }

    isFound(word) {
        let i = 0;
        if (this.root.length) {
            let parentNode = { children: this.root };
            while (i < word.length) {
                let dataPresent = parentNode.children.find(x => x.data === word[i]);
                if (!dataPresent) {
                    return false;
                } else if (!(dataPresent.isEndOfWord) && i === word.length - 1) {
                    return false;
                } else {
                    parentNode = dataPresent;
                }
                i++;
            }
            return true;
        } else {
            return false;
        }
    }
}

var t = new Tries();
t.add("Ani");
t.add("Anni");
t.add("dad");
t.add("dady");
t.add("mom");
t.add("mommy");
console.log(t.isFound("mommy"));
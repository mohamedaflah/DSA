class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return true;
    }
    display() {
        const words = [];
        this._displayRecursive(this.root, '', words);
        return words;
    }

    _displayRecursive(node, currentWord, words) {
        if (node.isEndOfWord) {
            words.push(currentWord);
        }
        for (const [char, childNode] of node.children) {
            this._displayRecursive(childNode, currentWord + char, words);
        }
    }
    print(){
        console.log(this.root.children);
    }
}

// Usage
const trie = new Trie();
trie.insert("apple");
console.log(trie.display());
console.log(trie.search("apple")); // Output: true

trie.print()

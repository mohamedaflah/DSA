class TrieNode {
  constructor() {
    this.Children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
    this.end = "*";
  }
  BuildTrie(str) {
    this.popularSuffixTrie(str);
  }
  popularSuffixTrie(str) {
    for (let i = 0; i < str.length; i++) {
      this.insertSubStringStartingAt(i, str);
    }
  }

  insertSubStringStartingAt(index, str) {
    for (let i = index; i < str.length; i++) {
      let letter = str[i];
      if (!this.root.Children.has(letter)) {
        let newNode = new TrieNode();
        this.root.Children.set(letter, newNode);
      }
      this.root = this.root.Children.get(letter);
    }
    this.root.set(this.end, null);
  }
  contains(letter) {

    for (let i = 0; i < letter.length; i++) {
      let str = letter[i];
      if (!this.root.Children.has(str)) {
        return false;
      }
      this.root = this.root.Children.get(str);
    }
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    }

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  get() {
    let node = this.head;
    let values = [];
    while (node) {
      values.push(node.data);
      node = node.next;
    }
    return values;
  }

  popAt(data) {
    let prev = this.head;
    let node = this.head;

    while (node) {
      if (node.data == data) {
        if (node === this.head) {
          this.head = node.next;
          break;
        }
        prev.next = node.next;
        break;
      }
      prev = node;
      node = node.next;
    }
  }

  indexOf(data) {
    let node = this.head;
    let idx = 0;
    while (node) {
      if (node.data == data) {
        return idx;
      }
      node = node.next;
      idx++;
    }
  }

  at(idx) {
    let node = this.head;
    let tempIdx = 0;
    while (node) {
      if (idx == tempIdx) {
        return node.data;
      }
      node = node.next;
      tempIdx++;
    }
  }

  pop() {
    let node = this.head;
    let prev = this.head;
    while (node) {
      if (!node.next) {
        if (node === this.head) {
          this.head = null;
        } else {
          prev.next = null;
        }
        this.tail = prev;
        break;
      }
      prev = node;
      node = node.next;
    }
  }
}

const ll = new LinkedList();

class Sorter {
  constructor() {
    this.arr = [];
    this.compare = (a,b) => {
      return a-b;
    }
    // your implementation
  }

  add(element) {
    this.arr.push(element);
    // your implementation
  }

  at(index) {
    if (this.arr.length)
      return this.arr[index];
    // your implementation
  }

  get length() {
    return this.arr.length;
    // your implementation
  }

  toArray() {
    return this.arr;
    // your implementation
  }

  sort(indices) {
    let tempArr = [];

    indices.sort();
    for (let i = 0; i < indices.length; i++) {
      tempArr.push(this.arr[indices[i]]);
    }
    tempArr.sort(this.compare);

    for (let i = 0; i < indices.length; i++) {
      this.arr[indices[i]] = tempArr[i];
    }
    return this;
    // your implementation
  }

  setComparator(compareFunction) {
    this.compare = compareFunction;
    // your implementation
  }
}

module.exports = Sorter;
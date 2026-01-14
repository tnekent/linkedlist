function createNode(value, nextNode) {
  return { value, nextNode };
}

function createLinkedList() {
  let _head = null;

  function append(value) {
    const newNode = createNode(value, null);

    if (_head === null) {
      _head = newNode;
    } else {
      let currentNode = _head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
  }

  function prepend(value) {
    const newNode = createNode(value, _head);
    _head = newNode;
  }

  function size() {
    let resultSize = 0,
      currentNode = _head;
    while (currentNode !== null) {
      currentNode = currentNode.nextNode;
      resultSize += 1;
    }
    return resultSize;
  }

  function head() {
    if (_head !== null) {
      return _head;
    }
  }

  function tail() {
    if (_head === null) {
      return;
    }

    let currentNode = _head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  function at(index) {
    let currentNode = _head;
    for (let i = 0; i < index; i++) {
      if (currentNode === null) {
        return;
      }
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  function pop() {
    if (_head === null) {
      return;
    }

    const popped = _head;
    _head = _head.nextNode;
    return popped;
  }

  function contains(value) {
    return findIndex(value) > -1;
  }

  function findIndex(value) {
    let currentNode = _head,
      index = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }

      currentNode = currentNode.nextNode;
      index++;
    }

    return -1;
  }

  function toString() {
    let currentNode = _head,
      resultString = "";

    while (currentNode !== null) {
      const value = currentNode.value;
      resultString += `( ${value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    resultString += null;
    return resultString;
  }

  function insertAt(index, ...values) {
    if (index < 0 || index > size()) {
      throw RangeError(`Specified index ${index} is out of bounds`);
    }

    const valuesRev = values.toReversed();
    if (index === 0) {
      valuesRev.forEach((value) => {
        prepend(value);
      });
    } else {
      const beforeNode = at(index - 1);
      let { nextNode } = beforeNode;
      valuesRev.forEach((value) => {
        let currentNode = createNode(value, nextNode);
        nextNode = currentNode;
      });
      beforeNode.nextNode = nextNode;
    }
  }

  function removeAt(index) {
    if (index < 0 || index > size() - 1) {
      throw RangeError(`Specified index ${index} is out of bounds`);
    }

    if (index === 0) {
      pop();
    } else {
      const beforeNode = at(index - 1);
      const removedNode = beforeNode.nextNode;
      const afterNode = removedNode.nextNode;

      removedNode.nextNode = null;
      beforeNode.nextNode = afterNode;
    }
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    findIndex,
    insertAt,
    removeAt,
    toString,
  };
}

// TESTING

const list = createLinkedList();

list.append(1);
list.append("dog");
list.append("cat");
list.append(12.5);
list.append(true);
list.append("hehe");
list.append(null);

// console.log(list.toString());
// console.log(list.at(2));
// console.log(list.at(5));
// console.log(list.at(6));

// console.log(list.contains("dog"));
// console.log(list.contains("bat"));
// console.log(list.contains(null));
// let index = list.findIndex("cat");
// console.log(list.at(index));

// console.log(list.toString());
// console.log(list.size());
//
// const popped = list.pop();
// console.log(popped);
// console.log(list.toString());
// console.log(list.size());

const list2 = createLinkedList();
list2.append(1);
list2.append(4);
list2.append(5);
// console.log(list2.toString());
// list2.insertAt(1, 2, 3);
// console.log(list2.toString());
// list2.insertAt(0, -2, -1);
// console.log(list2.toString());
// list2.insertAt(3, 6, 7);
// console.log(list2.toString());
// list2.removeAt(1);
// console.log(list2.toString());

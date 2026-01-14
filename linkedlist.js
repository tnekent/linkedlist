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

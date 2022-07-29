let arr = new Array(5).fill(0);
let top = -1;

const push = elem => {
  if (arr.length - 1 === top) {
    return 'Overloaded';
  }
  top++;
  arr[top] = elem;
  return arr;
};

const pop = () => {
  if (top === -1) {
    return 'UnderLoaded';
  }
  top--;
  let element = arr[top + 1];
  arr[top + 1] = 0;
  return element;
};

const peek = () => {
  if (top === -1) {
    return 'Stack is empty';
  }
  return arr[top];
};

console.log(push(10));
console.log(push(20));
console.log(push(30));
console.log(pop());
console.log(pop());
console.log(push(100));
console.log(peek());

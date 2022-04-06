class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(item) {
      return this.stack.push(item);
    }
  
    pop() {
      return this.stack.pop();
    }
  
    peek() {
      return this.stack[this.stack.length - 1];
    }
  }
  
  const stack = new Stack();
  
  stack.push("fox");
  stack.push("goose");
  stack.push("lizard");
  console.log(stack.pop()); // 'lizard'
  console.log(stack.peek()); // 'goose'
  console.log(stack.pop()); // 'goose'
  stack.push("llama");
  console.log(stack.pop()); // 'llama'
  console.log(stack.peek()); // 'fox'
  console.log(stack.pop()); // 'fox'
  console.log(stack.pop()); // null
  
  console.log(stack);
  
  class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(item) {
      return this.queue.unshift(item);
    }
  
    dequeue() {
      return this.queue.pop();
    }
  
    hasNext() {
      if (this.queue[this.queue.length - 1]) {
        return true;
      } else {
        return false;
      }
    }
    // hasNext() {
    //   return !!this.queue.list
    //  }
  }
  
  const queue = new Queue();
  
  queue.enqueue("fox");
  queue.enqueue("goose");
  queue.enqueue("lizard");
  console.log(queue.dequeue()); // 'fox'
  console.log(queue.hasNext()); // true
  console.log(queue.dequeue()); // 'goose'
  queue.enqueue("llama");
  console.log(queue.dequeue()); // 'lizard'
  console.log(queue.hasNext()); // true
  console.log(queue.dequeue()); // 'llama'
  console.log(queue.hasNext()); // false
  console.log(queue.dequeue()); // null
  
  function reverse(arr) {
    const stack = new Stack();
  
    for (let i = 0; i < array.length; i++) {
      stack.push(array[i]);
    }
    console.log();
  }
  
  class LinkedListNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    add(node) {
      //if theres not a next we want next to take the value of node
      if (!this.next) {
        this.next = node;
        //if there is already a next property, we will add the node to that next)
      } else {
        this.next.add(node);
      }
    }
  
    getList() {
  
  
  
  
      
      const orderedList = 
      // return a string with values in order
      return orderedList;
  
    }
  }
  
  const list = new LinkedListNode();
  
  const root = new LinkedListNode("A");
  const nodeB = new LinkedListNode("B");
  root.add(nodeB);
  console.log(root.getList()); // 'A B'
  const nodeC = new LinkedListNode("C");
  const nodeD = new LinkedListNode("D");
  const nodeE = new LinkedListNode("E");
  root.add(nodeC);
  root.add(nodeD);
  root.add(nodeE);
  console.log(root.getList());
  
  class BinaryTreeNode {
      constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
      }
    
      add(value) {
        // Implement me!
        // if the value being passed in is equal to the instance return null
        // else if the value is greater than the instance add it to the right
        // else add it to the left
        // 
       
  
  
        
      }
  
  
    }
  
  const B = new BinaryTreeNode('B');
  const A = new BinaryTreeNode('A');
  const C = new BinaryTreeNode('C');
  const D = new BinaryTreeNode('D');
  
  // B will be the root of the tree:
  B.add(A);
  B.add(D);
  B.add(C);
  
  
  class PersonTreeNode {
      constructor(person) {
        this.value = person.name;
        this.person = person;
        this.left = null;
        this.right = null;
      }
    
      add(node) {
        // implemented as in previous challenge
        add(value) {
          if (value === this.value) return false;
  =        if (value > this.value) {
            if (this.right) return this.right.add(value);
            this.right = new BinaryTreeNode(value);
          } else {
            if (this.left) return this.left.add(value);
            this.left = new BinaryTreeNode(value);
          }
          return true;
        }
      
      }
    
      findPerson(name) {
        // Implement me!
        // if name equals instance name then return early
        // if not, check if name value is lesser than instance
        //// if so add to left, else add to left
      }
    }
  
    // "root" is the node at the root of the tree (the tree)
  let person = root.find('Nelson');
  // person looks like
  // { 
  //   name: 'Nelson', 
  //   phone: '555-1212', 
  //   address: '123 Main St' 
  // }
  
  let person2 = root.find('Foo');
  // person2 is null
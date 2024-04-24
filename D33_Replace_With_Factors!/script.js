// // Definition for singly-linked list.
// // function Node(data){
// //   this.data = data
// //   this.next = null
// // }

// module.exports = { 
//     //param A : head node of linked list
//     //param B : integer
//     //return the head node in the linked list
//     solve : function(A, B){
//       let current = A;
      
//       while (current !== null) {
//         // Calculate the nearest multiple of B that is less than or equal to current node's value
//         let nearestMultiple = Math.floor(current.data / B) * B;
        
//         // Update the current node's value
//         current.data = nearestMultiple;
        
//         // Move to the next node
//         current = current.next;
//       }
      
//       return A;
//     }
//   };

// Definition for singly-linked list.
function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  // Function to create a linked list from an array
  function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new Node(arr[i]);
      current = current.next;
    }
    return head;
  }
  
  // Function to convert a linked list to array
  function linkedListToArray(head) {
    let current = head;
    let result = [];
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
  
  // Function to solve the problem
  function nearestMultiple(A, B) {
    let current = A;
  
    while (current !== null) {
      // Calculate the nearest multiple of B that is less than or equal to current node's value
      let nearestMultiple = Math.floor(current.data / B) * B;
  
      // Update the current node's value
      current.data = nearestMultiple;
  
      // Move to the next node
      current = current.next;
    }
  
    return A;
  }
  
  // Test cases
  let A1 = createLinkedList([1, 2, 3]);
  let B1 = 2;
  console.log(linkedListToArray(nearestMultiple(A1, B1))); // Output: [0, 2, 2]
  
  let A2 = createLinkedList([3, 4, 5]);
  let B2 = 3;
  console.log(linkedListToArray(nearestMultiple(A2, B2))); // Output: [3, 3, 3]
  
  
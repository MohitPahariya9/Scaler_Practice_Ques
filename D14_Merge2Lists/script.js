// Merge two sorted linked lists and return it as a new list. 

// The new list should be made by splicing together the nodes of the first two lists, and should also be sorted.

// For example, given following linked lists :

//   5 -> 8 -> 20 
//   4 -> 11 -> 15
// The merged list should be :

// 4 -> 5 -> 8 -> 11 -> 15 -> 20

function Node(data){
    this.data = data;
    this.next = null;
  }
  
  module.exports = { 
      mergeTwoLists : function(A, B) {
          let dummy = new Node();
          let current = dummy;
  
          while (A !== null && B !== null) {
              if (A.data <= B.data) {
                  current.next = A;
                  A = A.next;
              } else {
                  current.next = B;
                  B = B.next;
              }
              current = current.next;
          }
  
          current.next = A !== null ? A : B;
  
          return dummy.next;
      }
  };
// Example usage:
// Test case
let l1 = new Node(5);
l1.next = new Node(8);
l1.next.next = new Node(20);

let l2 = new Node(4);
l2.next = new Node(11);
l2.next.next = new Node(15);

let mergedList = module.exports.mergeTwoLists(l1, l2);

// Print merged list values
let result = [];
while (mergedList !== null) {
    result.push(mergedList.data);
    mergedList = mergedList.next;
}
console.log(result.join(' -> ')); // Output: 4 -> 5 -> 8 -> 11 -> 15 -> 20
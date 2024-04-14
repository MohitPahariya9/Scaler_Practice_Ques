// module.exports = {
//     deleteDuplicates: function(head) {
//         if (!head) return head; // If the list is empty, return null

//         let current = head; // Pointer to traverse the list
//         let prev = null; // Pointer to keep track of previous unique node

//         while (current) {
//             if (prev && prev.data === current.data) {
//                 // If current node's data matches previous node's data, skip this node
//                 prev.next = current.next;
//             } else {
//                 // If current node's data is different, update prev pointer
//                 prev = current;
//             }
//             current = current.next; // Move to the next node
//         }

//         return head;
//     }
// };

// Definition for singly-linked list.
//    function Node(data){
//         this.data = data
//         this.next = null
//}

module.exports = { 
    //param a : head node of linked list
    //return the head node in the linked list
	deleteDuplicates : function(l){

  var rl, cnode;
  var cnum;
  var dup = 0;
  while( l ) {
    //console.log( l.data );
    if( cnum === undefined ) {
      cnum = l.data;
      dup = 0;
    } else if( cnum === l.data )
      dup++;
    else if( cnum !== l.data ) {
      if( !rl )
        cnode = rl = { data : cnum, next : null };
      else cnode = cnode.next = { data : cnum, next : null };

      cnum = l.data;
      dup = 0;
    }
    l = l.next;
  }

  if( cnum !== undefined ) {
    if( !rl )
      cnode = rl = { data : cnum, next : null };
    else cnode = cnode.next = { data : cnum, next : null };
  }

  return rl;
	}
};

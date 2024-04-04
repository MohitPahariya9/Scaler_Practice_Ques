// using map
// module.exports = {
//     //param A : string
//     //return an integer
//        solve : function(A){
//              const frequencyMap = new Map();
   
//              for (let char of A) frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
   
//              let oddFrequencyCount = 0;
   
//              for (let freq of frequencyMap.values()) if (freq % 2 !== 0) oddFrequencyCount++;
      
//              return oddFrequencyCount <= 1 ? 1 : 0;
//        }
//    };

// other approach:-
module.exports = { 
    //param A : string
    //return an integer
    solve : function(A){
        let charCount = {};

        // Counting the frequency of each character
        for (let char of A) {
            charCount[char] = (charCount[char] || 0) + 1;
        }

        // Counting the number of characters with odd frequency
        let oddCount = 0;
        for (let count of Object.values(charCount)) {
            if (count % 2 !== 0) {
                oddCount++;
            }
        }

        // If oddCount is greater than 1, not possible to form a palindrome
        if (oddCount > 1) {
            return 0;
        } else {
            return 1;
        }
    }
};

// Test cases
console.log(module.exports.solve("abcde")); // Expected output: 0
console.log(module.exports.solve("abbaee")); // Expected output: 1

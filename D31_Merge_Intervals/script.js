

    function insertInterval(intervals, new_interval) { 
        if(new_interval[0]>new_interval[1]){ 
            var temp=new_interval[0]; 
            new_interval[0] = new_interval[1]; 
            new_interval[1]=temp; 
            
        } 
        intervals.push(new_interval); 
        intervals.sort(function(a, b){ 
            if(a[0] < b[0]) 
            return -1; 
            else if( a[0] > b[0]) 
            return 1; 
            return 0; 
            
        });  
        var merged = [intervals[0]]; 
        for(var i = 1; i < intervals.length; i++){ 
            var start = intervals[i][0]; 
            var end = intervals[i][1]; 
            var top = merged[merged.length - 1]; 
            if(top[1] < start){ 
                merged.push([start, end]); 
                
            } else if(top[1] < end){ 
                merged.pop(); 
                merged.push([top[0], end]); 
                
            } 
            
        } 
        return merged; 
    } 

    


// function insertInterval(intervals, newInterval) {
//     let result = [];
//     let i = 0;
//     const n = intervals.length;

//     // Add all intervals that end before the new interval starts
//     while (i < n && intervals[i][1] < newInterval[0]) {
//         result.push(intervals[i]);
//         i++;
//     }

//     // Merge intervals that overlap with the new interval
//     while (i < n && intervals[i][0] <= newInterval[1]) {
//         newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
//         newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
//         i++;
//     }

//     result.push(newInterval);

//     // Add remaining intervals
//     while (i < n) {
//         result.push(intervals[i]);
//         i++;
//     }

//     return result;
// }

// Example usage:
// const intervals1 = [[1,3],[6,9]];
// const newInterval1 = [2,5];
// console.log(insertInterval(intervals1, newInterval1)); // Output: [[1,5],[6,9]]

// const intervals2 = [[1,2],[3,5],[6,7],[8,10],[12,16]];
// const newInterval2 = [4,9];
// console.log(insertInterval(intervals2, newInterval2)); // Output: [[1,2],[3,10],[12,16]]
// Example usage:
// Example usage:
const intervals1 = [[1,3],[6,9]];
const newInterval1 = [2,5];
console.log(insertInterval(intervals1, newInterval1)); // Output: [[1,5],[6,9]]

const intervals2 = [[1,2],[3,5],[6,7],[8,10],[12,16]];
const newInterval2 = [4,9];
console.log(insertInterval(intervals2, newInterval2)); // Output: [[1,2],[3,10],[12,16]]


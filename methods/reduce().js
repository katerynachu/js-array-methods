//*    -- --- --- reduce()---- ----  *//
//* The reduce method runs the call-back function on each array element, and reduces the array down into a single value.

let numbers = [1, 2, 3, 4]
// let total = numbers.reduce((total, currentNum) => total + currentNum) // 10

//first loop 
//*total - starts from 1 ,currentNum its 2 (1+2 = 3)

//second loop 
//*total - (1+2 = 3) = 3 ,currentNum its 3  (3 + 3 = 6))

//third  loop 
//*total -  (3 + 3 = 6) = 6  ,currentNum its 4 (6 +4 = 10))

//finish 
//* result is 10

let total = numbers.reduce((total, currentNum) => total + currentNum,10) // 10 it is a start value for total

console.log(total);
//first loop 
//*total - starts from 10 ,currentNum its 1 (10+1 = 11)

//second loop 
//*total - (10+1 = 11) = 11 ,currentNum its 2  (11 + 2 = 13))

//third  loop 
//*total -  (11 + 2 = 13))= 13  ,currentNum its 3 (13 +3 = 16))
//fourth loop 
//*total -  (13 +3 = 16))= 16  ,currentNum its 4 (16 +4 = 20))
//finish 
//* result is 20

//*REduce can help find Max value in array

let arr = [1, 2, 3]
let max = arr.reduce((a, b) => {
  return Math.max(a, b)
}, -Infinity)
// 3





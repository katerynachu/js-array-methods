//*    -- --- --- every()---- ----  *//

//*  every  checks if every value in the array passes a certain test, rather than just some.*//

let numbers = [1, 2, 3, 4,5,6];

let everyTrue = numbers.every(n => n > 0 );
//*  because every number in array grater than 0*//

console.log(everyTrue)//true

let everyFalse = numbers.every(n => n > 3);
//*  because 1,2,3 not grater than 3 - so NOT every number > 3*//

console.log(everyFalse)//false







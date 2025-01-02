//*    -- --- --- some()---- ----  *//

//*  The some method checks if some array values pass a test. It returns either true or false. *//

let numbers = [1, 2, 3, 4,5,6]

let someTrue = numbers.some(n => n > 5);
//*  checking every number in array until find first true *//

console.log(someTrue)//true

let someFalse = numbers.some(n => n > 8)
//* if its nit true - return fasle *//

console.log(someFalse) //false
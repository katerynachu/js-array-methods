//*    -- --- --- flat()---- ----  *//

let numbers = [1,2,3,[4,5,6],7,8];
//* helps make array with extra array inside flat*//
console.log(numbers)//[1, 2, 3, Array(3), 7, 8]

let flat = numbers.flat();
console.log(flat)//[1, 2, 3, 4, 5, 6, 7, 8]


//* BUT only with one extra level by default *//
//EXAMPLE

let twoLevelsArrNumbers = [1,2,3,[4,[5],6],7,8];

let flatTwoLevelArr=twoLevelsArrNumbers.flat();
console.log(flatTwoLevelArr)//[1, 2, 3, 4, Array(1), 6, 7, 8]

//* You can specify how many levels you want to flat*//
let tryFlatTwoLevelArr=twoLevelsArrNumbers.flat(2);
console.log(tryFlatTwoLevelArr)//[1, 2, 3, 4, 5, 6, 7, 8]
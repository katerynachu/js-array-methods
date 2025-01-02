//*    -- --- --- sort()---- ----  *//

//*  sort puts an array's elements in ascending order. It is an "in-place" sorting algorithm - meaning that it mutates the original array and returns it.*//

const arrayNames = ["katya","olena","den","zoe","james"]


//*  by default from A - Z *//

let sortAlphabet = arrayNames.sort() 

console.log(sortAlphabet)//['den', 'james', 'katya', 'olena', 'zoe']


//*  for Numbers work by default too just for 1 - 9 *//

let numbers = [8,2,4,3,5,6,7];

let sorted = numbers.sort();

console.log(sorted)//[2, 3, 4, 5, 6, 7, 8]

//* if its 10 -  100000 NOT *//

let numb = [18,2,14,3,15,6,7];

let falsesorted = numb.sort();

console.log(falsesorted)//[14, 15, 18, 2, 3, 6, 7]

//* correct way to do that*//

let sortCorrect = numb.sort((a,b) => a - b);


console.log(sortCorrect)//[2, 3, 6, 7, 14, 15, 18]











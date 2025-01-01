//*    -- --- --- concat()---- ----  *//
//** combine arrays, add on the end of first arr  */

const arrayNames = ["katya","olena","den","zoe","james"]
let secondArrayNames = ['Tom','Sarah'];
let thirdArrayNames =["Ann","Sasha"]

let joinedArrays = arrayNames.concat(secondArrayNames);
console.log(joinedArrays)//['katya', 'olena', 'den', 'zoe', 'james', 'Tom', 'Sarah']

let joined3arrays = arrayNames.concat(secondArrayNames,thirdArrayNames);
console.log(joined3arrays)//['katya', 'olena', 'den', 'zoe', 'james', 'Tom', 'Sarah', 'Ann', 'Sasha']
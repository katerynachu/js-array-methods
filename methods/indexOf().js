//*    -- --- --- indexOf()---- ----  *//
//** use to find index some value in arr *//


const arrayNames = ["katya","olena","den","zoe","james"];
//** if its two same value Indexof will find first one*//

let index = arrayNames.indexOf('den');
console.log(index)//2

//** if we need last index in array *//
const arrayNames2 = ["katya","olena","den","zoe","james","den"];
let lastIndex =arrayNames2.lastIndexOf('den');
console.log(lastIndex)//5


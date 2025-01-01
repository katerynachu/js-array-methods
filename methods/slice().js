//*    -- --- --- slice()---- ----  *//
//*Slice out some value from array *//

//* remove from original arr from index to index BUT not includes last one  and save removed data *//


const arrayNames = ["katya","olena","den","zoe","james"];


let sliceArray = arrayNames.slice(2/*index from*/,4 /*index to 4th exclude 4*/);

console.log(sliceArray)// ['den', 'zoe']
console.log(arrayNames)//["katya","olena","den","zoe","james"]

//* So slice cut part of array without changes in main array*//
//* if you not specify second param  
//example: sliceArray = arrayNames.slice(1)
//* will cut and copy up to last elem 
//["den","zoe","james"];
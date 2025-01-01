//*    -- --- --- splice()---- ----  *//
//** remove elem from arr  *//


const arrayNames = ["katya","olena","den","zoe","james"]

// arrayNames.splice(1/*index arg*/,2 /*how many elements to remove*/)
// //** Splice method changing original array *//
// console.log(arrayNames)//['katya', 'zoe', 'james']

//** So if you work with splice - create copy of array first*//

let arrayNamesCopy = [...arrayNames];//["katya","olena","den","zoe","james"]

arrayNamesCopy.splice(2,1); //index=2,how many elem ?=1
console.log(arrayNamesCopy)//['katya', 'olena', 'zoe', 'james']

//** We also can use Splice for adding some elements in array or replace some elements*//

let newArrayCopy = [...arrayNames];//["katya","olena","den","zoe","james"]

newArrayCopy.splice(2,2,'newDen','newZoe');
console.log(newArrayCopy)//['katya', 'olena', 'newDen', 'newZoe', 'james']


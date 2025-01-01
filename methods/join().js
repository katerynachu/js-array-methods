//*    -- --- --- join()---- ----  *//
const arrayNames = ["katya","olena","den","zoe","james"]

let joinString = arrayNames.join(','); //<- specify by any character
console.log(joinString)//katya,olena,den,zoe,james
let joinString2 = arrayNames.join(' and ');

console.log(joinString2) // katya and olena and den and zoe and james
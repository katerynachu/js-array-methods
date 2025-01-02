//*    -- --- --- findIndex()---- ----  *//

//*  returns the index instead of the value:*//

let stock = [
    {
        item:'ketchup',
        quantity:32,
    },
    {
        item:'mayo',
        quantity:9,
    },
    {
        item:'hot sauce',
        quantity:12,
    }
]


let mayoIndex = stock.findIndex(s => s.item === 'mayo');

console.log(mayoIndex) // 1
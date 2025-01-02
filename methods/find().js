//*    -- --- --- find()---- ----  *//

//*  The find method returns the first element in the array that passes a certain test.*//

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

let mayoItem = stock.find(item => item.item === 'mayo');

console.log(mayoItem)//{item: 'mayo', quantity: 9}
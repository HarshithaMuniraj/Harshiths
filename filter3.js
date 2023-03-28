const products = [
    { product: 'bannana', price: 3},
    { product: 'mango', price: 6},
    { product: 'potato', price: ''},
    { product: 'avocado', price: 8},
    { product: 'coffee', price: 10},
    { product: 'tea', price: ''},
]
var result = products.filter(user => user.price > 0);
 
console.log(result);
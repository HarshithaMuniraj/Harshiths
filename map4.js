const products = [
    { product: 'bannana', price: 3},
    { product: 'mango', price: 6},
    { product: 'potato', price: ''},
    { product: 'avocado', price: 8},
    { product: 'coffee', price: 10},
    { product: 'tea', price: ''},
]
let productandprice = products.map(function(x){
    return x.product + x.price
});
console.log(productandprice);
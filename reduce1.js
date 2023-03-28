let numbers = [1,2,3,4,5,6,7,8,9];
let sum = numbers.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});

console.log(sum);
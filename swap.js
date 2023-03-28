function swap(x, y) {
    var t = x;
    x = y;
    y = t;
    return [x, y];
}

console.log(swap(2, 3));
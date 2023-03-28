var array1 = [1,2,3,4];
var array2 = [1,2,1,4];

function decorate(array) {
  array.uniques = function() {
    this.sort();
    for (var i = 0; i < this.length; i++) {
      if (this[i + 1] === this.length) return true;
      if (this[i] === this[i + 1]) return false;
    }
  }
}

decorate(array1);
decorate(array2);

console.log(array1.uniques());
console.log(array2.uniques());
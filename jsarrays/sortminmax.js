var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

var array1 = [98, 96, 97, 100,99,11,101];
array1.sort(function (a, b) { return a - b });
console.log(array1);
array1.sort(function (a, b) { return b - a });
console.log(array1);
var max_of_array = Math.max.apply(Math, array1);
var min_of_array = Math.min.apply(Math, array1);
console.log(max_of_array);
console.log(min_of_array);
// expected output: Array [1, 21, 30, 4]
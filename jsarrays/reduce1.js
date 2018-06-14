//to find an sorted object array
var array2 = [{ firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
{ firstName: "John", lastName: "Dok", age: 58, eyeColor: "green" },
{ firstName: "Arv", lastName: "ram", age: 22, eyeColor: "violet" },
{ firstName: "Kiru", lastName: "shan", age: 55, eyeColor: "red" }];
var newarray=[];
function removeDuplicates(originalArray, prop) {
    // var newArray = [];
    var lookupObject  = {};

    for(var i in originalArray) {
       lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for(i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
     return newArray;
}


var uniqueArray = removeDuplicates(array2, "firstName");
console.log("uniqueArray is: " + JSON.stringify(uniqueArray));
//sorting age
var result1 = array2.sort((a, b) => a.age - b.age);
console.log("Age is sorted: ");
console.log(result1);
console.log("********************************");

//sorting firstname  
var result2 = array2.sort(function (a, b) {
    var nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
    var nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
});
console.log("First name is sorted: ");
console.log(result2);
console.log("********************************");

//sorting lastname  
var result3 = array2.sort(function (a, b) {
    var nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
    var nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
});
console.log("Last name is sorted: ");
console.log(result3);
console.log("********************************");

//sorting eyeColor 
var result4 = array2.sort(function (a, b) {
    var nameA = a.eyeColor.toUpperCase(); // ignore upper and lowercase
    var nameB = b.eyeColor.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
});
console.log("Eye Color is sorted: ");
console.log(result4);
console.log("********************************");


//to find the sum of he array
var array1 = [98, 96, 97, 100, 99, 11, 101];
console.log("The given array is : " + array1);
var sum = array1.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;}, 0);
console.log("The sum of the array is : " + sum);

//to find ascending and descending order
array1.sort(function (a, b) { return a - b });
console.log("The ascending order of the array is : " + array1);
array1.sort(function (a, b) { return b - a });
console.log("The descending order of the array is : " + array1);

//to find the mininmum element of an array
var min = array1.reduce(
    (accumulator, currentValue) => {
        return (accumulator < currentValue ? accumulator : currentValue);});
console.log("The minimum value in the array is : " + min);

//to find the maximum element of an array
var max = array1.reduce(
    (accumulator, currentValue) => {
        return (accumulator > currentValue ? accumulator : currentValue);
    }
);
console.log("The maximum value in the array is : " + max);
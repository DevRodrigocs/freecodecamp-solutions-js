let arr = [1, 2, 3, 4, 5];

// Using slice to create a copy of a portion of the array
let copy = arr.slice(1, 4);
console.log(copy); // Output: [2, 3, 4]
console.log(arr); // Output: [1, 2, 3, 4, 5]

// splice modifies the original array
arr.splice(2, 1, 99);
console.log(arr); // Output: [1, 2, 99, 4, 5]
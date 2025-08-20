function frankenSplice(arr1, arr2, n) {

    let arr2Copy = arr2.slice(); // Create a shallow copy of arr2

    arr2Copy.splice(n, 0, ...arr1); // Insert arr1 into arr2Copy at index n

    return arr2Copy;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // Output: [4, 1, 2, 3, 5, 6]
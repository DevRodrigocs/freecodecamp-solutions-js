function reverseString(str) {
  // Convert the string to an array of characters
  let arr = str.split('');
  
  // Reverse the array of characters
  arr.reverse();
  
  // Join the reversed array back into a string
  return arr.join('');
}

console.log(reverseString("javascript")); // Output: "tpircsavaj"
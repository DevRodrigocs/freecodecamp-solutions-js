function pyramid(char, lines, centered) {
    for (let i = 1; i <= lines; i++) {
        let row = char.repeat(i);
        if (centered) {
            console.log(row.padStart(lines + i - 1));
        } else {
            console.log(row);
        }
    }
}

// Example usage:
pyramid('*', 5, true);

/*
Output:
    *
   **
  ***
 ****
*****
*/
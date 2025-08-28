function convertHTML(str) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&apos;"
  };

  let result = "";

  for(let i = 0; i < str.length; i++) {
    let char = str[i];
    if(map[char]) {
      result += map[char];
    } else {
      result += char;
    }
  }

  return result;
}

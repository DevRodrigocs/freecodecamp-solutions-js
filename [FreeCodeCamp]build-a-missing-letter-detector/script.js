function fearNotLetter(str) {
  let startCode = str.charCodeAt(0);

  for (let i = 0; i < str.length; i++) {
    let currentCode = str.charCodeAt(i);
    let expectedCode = startCode + i;

    
    if(currentCode != expectedCode) {
      return String.fromCharCode(expectedCode);
    }
  }
    return undefined;
}
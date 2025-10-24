function findLongestWordLength(sentence) {
  const words = sentence.trim().split(/\s+/);
  let longest = 0;

  for (let i = 0; i < words.length; i++) {
    const wordLength = words[i].length;

    if (wordLength > longest) {
      longest = wordLength;
    }
  }

  return longest;
}

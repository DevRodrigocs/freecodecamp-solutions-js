function diffArray(arr1, arr2) {
  const only1 = arr1.filter(item => !arr2.includes(item));
  const only2 = arr2.filter(item => !arr1.includes(item));

  return [...only1, ...only2];
}
function generatePassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  let password = "";

  for (let i = 0; i < length; i++ ) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomChar = characters[randomIndex];
    password += randomChar;
  }
  return password;
}

const password = generatePassword(10);

console.log("Generated password: " + password);

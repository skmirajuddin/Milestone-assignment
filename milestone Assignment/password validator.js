const prompt = require("prompt-sync")();

const password = prompt("Enter Password:");
const confirmPassword = prompt("Confirm Password:");

if (password === confirmPassword) {
  console.log("Password Matched. Password validation Successful.");
} else {
  console.log("Password didn't match. Password validation unsuccessful");
}

// Assalamualaikum @everyone 👋
// 🚀 Day 22 Challenge: Start Coding! 🚀
// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".
function combiningStringAndNumbers(text, num) {
    return text + num;
}
console.log(combiningStringAndNumbers("Age: ", 30));
console.log("\n");
// Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.
function remainder(num1, num2) {
    return num1 % num2;
}
console.log(remainder(5, 2));
console.log("\n");
// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
function checkBooleans(val1, val2) {
    return val1 && val2;
}
console.log(checkBooleans(true, false));

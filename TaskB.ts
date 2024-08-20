// 100 Days Of Coding Challenge!

/** Question 71:
Compare `let` and `const`: Create two examples where `let` allows reassignment but `const` does not.
Try to reassign a `const`-declared variable and catch the error.*/

//---------------------------------------------------------------------------------------------------

// Example with `let`
let count = 10;
console.log(count); // Output: 10
count = 20; // Reassignment is allowed
console.log(count); // Output: 20

// Example with `const`
const maxCount = 50;
console.log(maxCount); // Output: 50
try {
  maxCount = 100; // Reassignment is not allowed, will throw an error
} catch (error) {
  console.error("Error: Cannot reassign a const variable");
}

// Explanation:
// `let` allows reassignment of the variable, while `const` does not.
// Attempting to reassign a `const` variable results in a TypeError.

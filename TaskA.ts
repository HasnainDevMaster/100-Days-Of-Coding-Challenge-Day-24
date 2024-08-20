// 100 Days Of Coding Challenge!

/** Question 70:
Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5.
Explain how the let keyword affects the visibility of the loop variable.*/

//---------------------------------------------------------------------------------------------------------------

// Declare the Function "printNumbers()" to print numbers with `let` keyword
function printNumbers(): void {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

// Call th Function
printNumbers(); //Output = (list) 1,2,3,4,5

// Explanation:
// The `let` keyword declares a block-scoped variable `i`.
// This means `i` is only accessible within the loop block.
// Each iteration of the loop has its own `i` variable.

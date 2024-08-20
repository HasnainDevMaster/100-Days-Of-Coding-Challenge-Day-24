"use strict";
// 100 Days Of Coding Challenge!
/** Question 72:
Block Scope with `let` and `const`: Demonstrate block scope by creating a code block with `` that uses both `let` and `const`.
Show how variables declared inside the block are not accessible outside of it.*/
//----------------------------------------------------------------------------------------------------------------------------
{
    let blockScopedLet = "I am block scoped with let";
    const blockScopedConst = "I am block scoped with const";
    console.log(blockScopedLet); // Output: I am block scoped with let
    console.log(blockScopedConst); // Output: I am block scoped with const
}
try {
    console.log(blockScopedLet); // Error: blockScopedLet is not defined
}
catch (error) {
    console.error("Error: blockScopedLet is not accessible outside the block");
}
try {
    console.log(blockScopedConst); // Error: blockScopedConst is not defined
}
catch (error) {
    console.error("Error: blockScopedConst is not accessible outside the block");
}
// Explanation:
// Variables declared with `let` and `const` inside a block are not accessible outside of it.
// This demonstrates the block scope of `let` and `const`.

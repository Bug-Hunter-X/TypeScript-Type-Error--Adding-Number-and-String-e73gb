# TypeScript Type Error: Adding Number and String

This example demonstrates a common type error in TypeScript that occurs when attempting to add a number and a string.  TypeScript's type system catches this error at compile time, preventing a runtime error.

## Bug

The `add` function is defined to accept two numbers and return their sum. However, the code calls the function with a number and a string, resulting in a type error.

## Solution

The solution involves ensuring that both arguments passed to the `add` function are numbers.  This can be done through type checking or explicit type casting.
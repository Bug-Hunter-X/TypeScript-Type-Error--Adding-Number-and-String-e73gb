function add(a: number, b: number): number {
  return a + b;
}

const result1 = add(1, 2); // Correct: Adds two numbers

const numStr: string = '2';
const result2 = add(1, parseInt(numStr, 10)); // Correct: Parses the string to a number before adding

const result3 = add(1, Number(numStr)); // Correct: Uses Number() for type conversion
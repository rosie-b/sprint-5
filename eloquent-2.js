// Looping A Triangle exercise

var triangleRow = '#'; 
for (var triangleRow = '#'; triangleRow.length <= 7; triangleRow += '#')   
console.log(triangleRow);

// fist line of code: Sets the variable triangleRow and with the value of '#'.
// second line of code: Sets '#' as the initial row (loop); tells the loop to keep going until the length of the array is <=7 long; adds '#' to the end of the array until the loop is stopped.
// third line of code: Displays the output of variable triangleRow.

// FizzBuzz exercise

for (var i = 1; i <= 100; i++) {
    var fizzBuzz = "";
    if (i % 3 == 0 && i % 5 == 0) {
      fizzBuzz += "FizzBuzz";
    } else if (i % 3 == 0) {
      fizzBuzz += "Fizz";
    } else if (i % 5 == 0) {
      fizzBuzz += "Buzz";
    } 
    console.log(fizzBuzz || i);
}

// first line of code: Sets the initial value as 1; tells the loop to keep going until it reaches 100; will add 1 to the result ever time the statemetn is executed.
// second line of code: Sets the variable and the "" tells it to expect the result to be a string.
// first if statement = return "FizzBuzz" if the number returned can be divided by BOTH 3 and 5.
// second if statement = return "Fizz" if the number can be divided only by 3.
// third if statement = return "Buzz" if the number can be divided only by 5.
// console log to return either "FizzBuzz", "Fizz", "Buzz" or else the next number to be produced by the original statement.

// Chessboard exercise

var grid = 8;
var chessboard = "";

for (var y = 0; y < grid; y++) {
  for (var x = 0; x < grid; x++) {
    if ((x + y) % 2 == 0) {
      chessboard += " ";
    } else {
      chessboard += "#";
    }
  }
  chessboard += "\n";
}

console.log(chessboard);

// first line of code: Sets the grid to 8 characters in length.
// second line of code: Sets the chessboard variable and tells it to expect the result to be a string.
// first 'for loop' (outer loop) is linked to the "\n" and this statement creates the new lines until the grid equals 8 rows.
// second 'for loop' (inner loop) is looking at each new number created and calculating whether the remainder would be 0 ('true') or 1 ('false') and allocating either a blank space or '#' accordingly.
  // e.g. first row = 0 and first number = 0. Sum of these % 2 = 0. So this will result in " ". 
  // e.g. first row = 0 and second number = 1. Sum of these % 2 <> 0. So this will result in "#".
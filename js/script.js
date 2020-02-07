// Larger or Smaller? (5 points)
// Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.

let first = window.prompt("Enter a number.");
let second = window.prompt("Enter another number.");
let highest = Math.max(first, second);
window.document.write(highest);
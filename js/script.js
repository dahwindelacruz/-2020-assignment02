// Larger or Smaller? (5 points)
// Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.

// let first = window.prompt("Enter a number.");
// let second = window.prompt("Enter another number.");
// let highest = Math.max(first, second);
// window.document.write(highest);


// The “Coin Flip” Game (10 points)
// In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”. To complete the game follow the steps outlined below:
// 1.Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number.
// 2.Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
// 3.Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails. 
// 4.If the result is heads and the user selects heads, display the following message within an alert: 
// The flip was heads and you chose heads...you win!
// 5.If the result is heads and the user selects tails, display the following message within an alert: 
// The flip was heads but you chose tails...you lose!
// 6.If the result is tails and the user selects heads, display the following message within an alert: 
// The flip was tails but you chose heads...you lose!
// 7.If the result is tails and the user selects tails, display the following message within an alert: 
// The flip was tails and you chose tails...you win!
// 8.Use two Math methods to get a solid whole number on the coin flip. Modify the evaluation of the expression in your conditional so that it now checks for a Boolean result.

let coinFlip = Math.floor(Math.random() * 10) + 1;
window.console.log(coinFlip);
let choice = window.prompt("Select heads or tails");
if (coinFlip <= 5 && choice == "heads") {
    window.document.write("The flip was heads and you chose heads...you win!")
} else if (coinFlip <= 5 && choice == "tails") {
    window.document.write("The flip was heads but you chose tails...you lose!")
} else if (coinFlip >= 6 && choice == "heads") {
    window.document.write("The flip was tails but you chose heads...you lose!")
} else {
    window.document.write("The flip was tails and you chose tails...you win!")
}

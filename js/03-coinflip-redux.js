let coinFlip;
let i;
for (i = 1; i <= 10; i += 1) {
    coinFlip = Math.round(Math.random(coinFlip));
    window.console.log(coinFlip);
} if (coinFlip === 0) {
    window.console.log("Heads");
} else {
    window.console.log("Tails");
}
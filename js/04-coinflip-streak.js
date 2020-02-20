let coinFlip;
do {
    coinFlip = Math.round(Math.random(coinFlip));
    window.console.log(coinFlip);
    if (coinFlip === 0) {
        window.console.log("Heads");
    }
} while (coinFlip === 1) {
    window.console.log("Tails");
}
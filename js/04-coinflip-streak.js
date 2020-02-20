let coinFlip;
do {
    coinFlip = Math.round(Math.random(coinFlip));
    window.console.log(coinFlip);
    if (coinFlip === 0) {
        window.console.log("Heads");
    } else {
        window.console.log("Tails");
    }
} while (coinFlip === 0) {
}
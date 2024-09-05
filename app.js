window.addEventListener("load", start);

// const values = [...Array.from({ length: 100 }, (_, i) => i + 1)];

let secret;
let guesses = 1;
let low = 1;
let high = 100;

function start() {
    console.log("starting");
    secret = binaryGuess();
    document.querySelector("#start").addEventListener("click", () => {
        output(`I'm guessing ${secret}`);
        document.querySelector("#start").disabled = true;
    });
    document.querySelector("#correct").addEventListener("click", correct);
    document.querySelector("#higher").addEventListener("click", higher);
    document.querySelector("#lower").addEventListener("click", lower);
}

function binaryGuess() {
    return Math.floor((low + high) / 2);
}

function correct() {
    output(`I guessed it in ${guesses} guesses!`);
    if (guesses <= 3) {
        output("Fantastic!");
    } else if (guesses <= 5) {
        output("Good job!");
    } else if (guesses <= 7) {
        output("Meh, could be better.");
    } else {
        output("That took a while...");
    }
}

function higher() {
    guesses++;
    low = secret + 1;
    checkSingleOption();
}

function lower() {
    guesses++;
    high = secret - 1;
    checkSingleOption();
}

function checkSingleOption() {
    if (low > high) {
        output("You're cheating!");
        disableButtons();
    } else if (low === high) {
        output(`The only possible number is ${low}.`);
        disableButtons();
    } else {
        secret = binaryGuess();
        output(`I'm guessing ${secret}`);
    }
}

function disableButtons() {
    document.querySelector("#higher").disabled = true;
    document.querySelector("#lower").disabled = true;
}

function output(text) {
    document.querySelector("#guesses").insertAdjacentHTML("beforeend", `<li>${text}</li>`);
}

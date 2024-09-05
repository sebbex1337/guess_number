window.addEventListener("load", start);

const values = [...Array.from({ length: 100 }, (_, i) => i + 1)];

let secret;
let guesses = 1;

function start() {
    console.log("starting");
    secret = randomNumber();
    document.querySelector("#start").addEventListener("click", () => {
        output(`I'm guessing ${secret}`);
    });
    document.querySelector("#correct").addEventListener("click", correct);
    document.querySelector("#higher").addEventListener("click", higher);
    document.querySelector("#lower").addEventListener("click", lower);
}

function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function correct() {
    output(`I guessed it in ${guesses} guesses!`);
}

function higher() {
    guesses++;
    secret = randomNumber();
    output(`I'm guessing ${secret}`);
}

function lower() {
    guesses++;
    secret = randomNumber();
    output(`I'm guessing ${secret}`);
}

function output(text) {
    document.querySelector("#guesses").insertAdjacentHTML("beforeend", `<li>${text}</li>`);
}

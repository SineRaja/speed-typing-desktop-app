let timerElement = document.getElementById('timer');
let quoteDisplayElement = document.getElementById('quoteDisplay');
let resultElement = document.getElementById('result');
let quoteInputElement = document.getElementById('quoteInput');
let submitButtonElement = document.getElementById('submitBtn');
let resetButtonElement = document.getElementById('resetBtn');
let spinnerElement = document.getElementById('spinner');
let timerIntervalId;

function checkTypedText() {
    if (quoteDisplayElement.textContent === quoteInputElement.value) {
        resultElement.textContent = "Your typing speed: " + (parseInt(timerElement.textContent) + 1) + " seconds";
        resetTypingTimer();
    } else {
        resultElement.textContent = "Incorrect sentence typed";
    }
}

function startTypingTimer() {
    let secondsCounter = 0;
    timerIntervalId = setInterval(function () {
        timerElement.textContent = secondsCounter;
        secondsCounter = secondsCounter + 1;
    }, 1000);
}

function resetTypingTimer() {
    clearInterval(timerIntervalId);
    timerElement.textContent = "0";
}

function fetchRandomQuote() {
    spinnerElement.classList.add('spinner-border');
    fetch("https://apis.ccbp.in/random-quote")
        .then(response => response.json())
        .then(data => {
            spinnerElement.classList.remove('spinner-border');
            quoteDisplayElement.textContent = data.content;
            startTypingTimer();
        })
        .catch(error => console.error("Error fetching quote:", error));
}

fetchRandomQuote();

submitButtonElement.addEventListener('click', function () {
    checkTypedText();
    // Timer is not reset here intentionally
});

resetButtonElement.addEventListener('click', function () {
    fetchRandomQuote();
    resetTypingTimer();
    quoteInputElement.value = "";
});

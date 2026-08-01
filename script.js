// Rock, Paper aur Scissors ke sabhi buttons select kar rahe hain
const choiceButtons = document.querySelectorAll(".choice-btn");

// HTML ke result elements ko select kar rahe hain
const playerChoiceText =
    document.getElementById("playerChoice");

const computerChoiceText =
    document.getElementById("computerChoice");

const resultMessage =
    document.getElementById("resultMessage");

// Score show karne wale elements
const playerScoreText =
    document.getElementById("playerScore");

const computerScoreText =
    document.getElementById("computerScore");

// Restart button
const restartBtn =
    document.getElementById("restartBtn");

// Player ka starting score
let playerScore = 0;

// Computer ka starting score
let computerScore = 0;

// Game ke available choices
const choices = [
    "rock",
    "paper",
    "scissors"
];

// Har choice ka emoji
const choiceEmojis = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};


/*
    Har choice button par click event lagaya gaya hai
*/
choiceButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Click kiye gaye button se choice read karte hain
        const playerChoice =
            button.dataset.choice;

        // Game play function chalate hain
        playGame(playerChoice);

        // Selected button ko highlight karte hain
        highlightSelectedButton(button);
    });
});


/*
    Main game function
*/
function playGame(playerChoice) {

    // Computer ke liye random choice generate karte hain
    const computerChoice =
        getComputerChoice();

    // Player ki choice ka emoji show karte hain
    playerChoiceText.textContent =
        choiceEmojis[playerChoice];

    // Computer ki choice ka emoji show karte hain
    computerChoiceText.textContent =
        choiceEmojis[computerChoice];

    // Emoji animation dobara chalane ke liye
    restartEmojiAnimation(playerChoiceText);
    restartEmojiAnimation(computerChoiceText);

    // Winner check karte hain
    const result =
        checkWinner(playerChoice, computerChoice);

    // Result screen par show karte hain
    displayResult(
        result,
        playerChoice,
        computerChoice
    );
}


/*
    Computer ki random choice generate karta hai
*/
function getComputerChoice() {

    // 0 se 2 ke beech random number generate hoga
    const randomIndex =
        Math.floor(Math.random() * choices.length);

    // Random index ki choice return hogi
    return choices[randomIndex];
}


/*
    Player aur computer ki choice compare karta hai
*/
function checkWinner(playerChoice, computerChoice) {

    // Dono ki choice same hai to draw
    if (playerChoice === computerChoice) {
        return "draw";
    }

    // Player ke jeetne ki conditions
    if (
        playerChoice === "rock" &&
        computerChoice === "scissors"
    ) {
        return "win";
    }

    if (
        playerChoice === "paper" &&
        computerChoice === "rock"
    ) {
        return "win";
    }

    if (
        playerChoice === "scissors" &&
        computerChoice === "paper"
    ) {
        return "win";
    }

    // Upar ki koi condition match nahi hui,
    // to computer jeet gaya
    return "lose";
}


/*
    Result aur score update karta hai
*/
function displayResult(
    result,
    playerChoice,
    computerChoice
) {

    // Purani result classes remove karte hain
    resultMessage.classList.remove(
        "win",
        "lose",
        "draw"
    );

    // Player jeeta
    if (result === "win") {

        playerScore++;

        playerScoreText.textContent =
            playerScore;

        resultMessage.textContent =
            `${formatChoice(playerChoice)} ne ` +
            `${formatChoice(computerChoice)} ko hara diya. ` +
            `Aap jeet gaye!`;

        resultMessage.classList.add("win");
    }

    // Computer jeeta
    else if (result === "lose") {

        computerScore++;

        computerScoreText.textContent =
            computerScore;

        resultMessage.textContent =
            `${formatChoice(computerChoice)} ne ` +
            `${formatChoice(playerChoice)} ko hara diya. ` +
            `Computer jeet gaya!`;

        resultMessage.classList.add("lose");
    }

    // Game draw hua
    else {

        resultMessage.textContent =
            `Dono ne ${formatChoice(playerChoice)} chuna. ` +
            `Game draw ho gaya!`;

        resultMessage.classList.add("draw");
    }
}


/*
    Choice ke first letter ko capital karta hai

    Example:
    rock → Rock
*/
function formatChoice(choice) {

    return (
        choice.charAt(0).toUpperCase() +
        choice.slice(1)
    );
}


/*
    Click kiye gaye button ko highlight karta hai
*/
function highlightSelectedButton(selectedButton) {

    // Sabhi buttons se selected class remove karo
    choiceButtons.forEach((button) => {
        button.classList.remove("selected");
    });

    // Click kiye gaye button par selected class add karo
    selectedButton.classList.add("selected");
}


/*
    Emoji ki animation ko dobara start karta hai
*/
function restartEmojiAnimation(element) {

    // Animation temporarily remove karo
    element.style.animation = "none";

    // Browser ko element dobara calculate karne ko bolta hai
    void element.offsetWidth;

    // Animation dobara add karo
    element.style.animation = "pop 0.35s ease";
}


/*
    Game reset karta hai
*/
function restartGame() {

    // Scores ko zero karo
    playerScore = 0;
    computerScore = 0;

    // Screen par score update karo
    playerScoreText.textContent = "0";
    computerScoreText.textContent = "0";

    // Choices ko question mark par reset karo
    playerChoiceText.textContent = "❔";
    computerChoiceText.textContent = "❔";

    // Starting message show karo
    resultMessage.textContent =
        "Game start karne ke liye koi option select karo.";

    // Result color classes remove karo
    resultMessage.classList.remove(
        "win",
        "lose",
        "draw"
    );

    // Selected button highlight remove karo
    choiceButtons.forEach((button) => {
        button.classList.remove("selected");
    });
}


/*
    Restart button click event
*/
restartBtn.addEventListener(
    "click",
    restartGame
);
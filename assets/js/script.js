// Play buttons
const startButton = document.getElementById("start-button");
const endButton = document.getElementById("end-button");

// Page changes
const startPage = document.getElementsByClassName("start-page");
const playPage = document.getElementsByClassName("play-page");
const endPage = document.getElementsByClassName("end-page");

// Game statistics
let score = document.getElementsByClassName(".score");
let result = 0;

// Images array for red need bubble
let redNeedIcon = document.querySelector("#need-icon");
const ICONS = [
    "assets/images/pet-water.webp",
    "assets/images/pet-food.webp",
    "assets/images/pet-love.webp",
    "assets/images/pet-play.webp"
];

// Selects a random value in an array
function selectArrayElement(array) {
    let randomNum = Math.floor(Math.random() * array.length);
    return randomNum;
}

// Toggles between a blank icon and a randomly selected icon from the ICONS array
let currentSelectedElement = "";

function randomIconInRedBubble() {
    let selectedElement = selectArrayElement(ICONS);
    redNeedIcon.src = ICONS[selectedElement];
    currentSelectedElement = selectedElement;

    setTimeout(function () {
        redNeedIcon.src = "assets/images/blank.png";
        setTimeout(randomIconInRedBubble, 700);
    }, 2000);
}

// Function that plays the game
function playTheGame() {
    // Starts changing the random Icon bubble
    randomIconInRedBubble();

    // Controls buttons for the game
    let pressedButton = '';
    let correctButtonClicked = false;

    // Water button
    document.getElementById("0").addEventListener("click", function () {
        pressedButton = document.getElementById("0").id;
        correctButtonClicked = checkPressedButton(pressedButton, currentSelectedElement);
        if (correctButtonClicked == true) {
            console.log('point')
        } else {
            console.log('dead')
        }
    });

    // Food button
    document.getElementById("1").addEventListener("click", function () {
        pressedButton = document.getElementById("1").id;
        correctButtonClicked = checkPressedButton(pressedButton, currentSelectedElement);
        if (correctButtonClicked == true) {
            console.log('point')
        } else {
            console.log('dead')
        }
    });

    // Love button
    document.getElementById("2").addEventListener("click", function () {
        pressedButton = document.getElementById("2").id;
        correctButtonClicked = checkPressedButton(pressedButton, currentSelectedElement);
        if (correctButtonClicked == true) {
            console.log('point')
        } else {
            console.log('dead')
        }
    });

    // Play button
    document.getElementById("3").addEventListener("click", function () {
        pressedButton = document.getElementById("3").id;
        correctButtonClicked = checkPressedButton(pressedButton, currentSelectedElement);
        if (correctButtonClicked == true) {
            console.log('point')
        } else {
            console.log('dead')
        }
    });
}

// Check if the clicked button is correct
function checkPressedButton(pressedButton, currentIcon) {
    if (pressedButton == currentIcon) {
        return true;
    } else {
        return false;
    }
}

// Start page button
startButton.addEventListener("click", startGame);

function startGame() {
    // Shows the Play page, hides the start page
    document.querySelector(".start-page").classList.toggle("none");
    document.querySelector(".play-page").classList.toggle("none");

    // plays the game
    playTheGame();
}

// Restart page button
endButton.addEventListener("click", restartGame);

// Reloads the page to show the start page again
function restartGame() {
    location.reload();
}

// game.js

// Initialization of game variables
let playerScore = 0;
let gameLevel = 1;
let playerName = '';

// Function to initialize the game
function initializeGame(name) {
    playerName = name;
    playerScore = 0;
    gameLevel = 1;
    console.log(`Game initialized for ${playerName}`);
}

// Function to display the current score
function displayScore() {
    console.log(`Current Score: ${playerScore}`);
}

// Game loop function
function gameLoop() {
    console.log(`Entering game loop at level ${gameLevel}...`);
    // Game logic; this simulates a simple game mechanic
    // Placeholder for game actions and score updates
    let action = Math.random(); 
    if (action < 0.5) {
        playerScore += 10; // simulate scoring
    } else {
        playerScore -= 5; // simulate losing points
    }
    displayScore();
    gameLevel += 1; // Increase level after each loop
}

// Run the game loop a certain number of times for demo
for (let i = 0; i < 5; i++) {
    gameLoop();
}
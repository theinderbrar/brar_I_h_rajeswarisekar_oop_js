export class MemoryGame {
    constructor() {
        // Initialize score, click count, and selection card arrays
        this.score = 0;
        this.clickCount = 0;
        this.selectionCardsId = [];
        this.selectionCardsFullId = [];
        this.selectionCardsType = [];
    }

    // OOP: Method to increment score by 2 and update the score output
    scoreCount() {
        this.score += 2;
        scoreOutput.innerHTML = this.score;
        if (this.score === limit) this.win_game();
    }

    // OOP: Method to display win message and adjust game UI upon winning
    win_game() {
        win.innerHTML = "Win!";
        main.style.opacity = "0.5";
        play.style.opacity = "1.0";
        play.value = "Play again";
    }

    // Other methods...
}
function scoreCount() {
    this.score += 2;
    scoreOutput.innerHTML = this.score;
    if (this.score === limit) this.win_game();
}
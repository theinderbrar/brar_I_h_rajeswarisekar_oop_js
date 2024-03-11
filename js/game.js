// game.js
class Game {
    constructor() {
        this.score = 0;
        this.clickCount = 0;
        this.limit = 0;
    }
    changeLimit() {
        if (range.value % 2 === 0) {
             limitOutput.innerHTML = range.value;
            this.limit = range.value;
        } else {
            range.value++;
            this.changeLimit(); // Recursive call corrected to call the method again, updating the limit value
        }
    }
    scoreCount() {
        this.score += 2;
        scoreOutput.innerHTML = this.score;
        console.log("this.score::"+this.score)
        console.log("this.limit::"+this.limit)

        if (this.score == this.limit)
        { this.winGame();}
    }

    // winGame() {
    //     console.log("this.limit:>>>:"+this.limit)

    //   //  alert("you have win")
    //     win.innerHTML = "Win!";
    //     main.style.opacity = "0.5";
    //     play.style.opacity = "1.0";
    //     play.value = "Play again";
    // }
    // In the winGame method of your Game class
winGame() {
    console.log("this.limit:>>>:" + this.limit);

    // Show the win modal
    const modal = document.getElementById("winModal");
    modal.style.display = "block";

    // Handle play again button click
    const playAgainBtn = document.getElementById("playAgainBtn");
    playAgainBtn.addEventListener("click", () => {
        modal.style.display = "none"; // Hide the modal
        this.resetGame(); // Add this method to reset the game to its initial state
    this.playGame();
    });

    // Disable background interactions while modal is displayed
    main.style.opacity = "0.5";
    play.style.opacity = "1.0";
    play.value = "Play again";
}


    click() {
        this.clickCount++;
        clicks.innerHTML = this.clickCount;
    }

    changeLimit() {
        if (range.value % 2 === 0) {
             limitOutput.innerHTML = range.value;
            this.limit = range.value;
        } else {
            range.value++;
            this.changeLimit();
        }
    }

    playGame() {
        play.value = "Play";
        gsap.to(play, { opacity: 0.5, duration: 0.5 }); // Fade out play button
        gsap.to(main, { opacity: 1, duration: 1, delay: 0.5 }); // Fade in main element
        this.score = -2;
        this.scoreCount();
        this.clickCount = -1;
        this.click();
        win.innerHTML = "";
        card.clear();
        card.generate();
        card.panel();
    }
}

const game = new Game();

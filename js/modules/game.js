 
 import { Card } from "./card.js";

 class Game {
    constructor() {
        this.score = 0;
        this.clickCount = 0;
        this.limit = 0;
        console.log("Game const")
          
    }

    changeLimit() {
        console.log("geme change limit")
        if (range.value % 2 === 0) {
            this.limit = range.value;
        } else {
            range.value++;
            this.changeLimit(); // Recursive call corrected to call the method again, updating the limit value
        }
    }

    scoreCount() {
        this.score += 2;
        scoreOutput.innerHTML = this.score;
        if (this.score === this.limit) this.winGame();
    }

    winGame() {
        win.innerHTML = "Win!";
        main.style.opacity = "0.5";
        play.style.opacity = "1.0";
        play.value = "Play again";
    }

    click() {
        this.clickCount++;
        clicks.innerHTML = this.clickCount;
    }

    playGame() {
        const card = new Card(); // Create an instance of the Card class

        console.log("game play")
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
 
export { Game };

 

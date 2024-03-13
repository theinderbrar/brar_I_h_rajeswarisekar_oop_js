import { Card } from "./modules/card.js";
import  { Game }  from "./modules/game.js";
import { MemoryGame } from "./modules/memorygame.js";

const game = new Game();
const card = new Card();
const memoryGame = new MemoryGame();

function start() {
  game.changeLimit();
  game.playGame();
}
function playGame() {
   
  game.playGame();
}
console.log("mainnnnnnnnn")
document.body.onload = start;
export { playGame }; // Export the playGame function


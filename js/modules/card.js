// card.js
class Card {
    constructor() {
        this.selectionCardsId = [];
        this.selectionCardsFullId = [];
        this.selectionCardsType = [];
    }

    idCard(type, id) {
        let mul = 0;

        if (id > 0 && id <= 9) {
            mul = type * 100;
        } else if (id > 9) {
            mul = type * 1000;
        } else {
            mul = type * 10;
        }

        return mul + (id * 10);
    }

    lockCard(cardId, id) {
        id++;
        const cardElement = document.getElementById(cardId);
        gsap.to(cardElement, { rotationY: 180, duration: 0.5, onComplete: () => {
            cardElement.src = "images/" + id + ".png";
            cardElement.onclick = "";
        }});
    }

    releaseCard(cardId, id, type) {
        const cardElement = document.getElementById(cardId);
        gsap.to(cardElement, { rotationY: 0, duration: 0.5, onComplete: () => {
            cardElement.src = "images/0.png";
            cardElement.onclick = function() {
                card.select(type, id);
            };
        }});
    }

    select(type, id) {
        game.click();
        
        let cardId = this.idCard(type, id); 

        this.lockCard(cardId, id);
        this.selectionCardsId.push(id);
        this.selectionCardsFullId.push(cardId);
        this.selectionCardsType.push(type);

        if (this.selectionCardsId.length === 2 && this.selectionCardsId[0] === this.selectionCardsId[1]) {
            for (let i in this.selectionCardsFullId) {
                this.foundCards(this.selectionCardsFullId[i]);
            }
            game.scoreCount();
            this.clearSelectingCards();
        } else if (this.selectionCardsId.length === 2) {
            for (let i = 0; i < 2; i++) {
                this.releaseCard(this.selectionCardsFullId[i], this.selectionCardsId[i], this.selectionCardsType[i]);
            }
            this.clearSelectingCards();
        }
    }

    clearSelectingCards() {
        this.selectionCardsId = [];
        this.selectionCardsFullId = [];
        this.selectionCardsType = [];
    }

    foundCards(cardId) {
        document.getElementById(cardId).onclick = "";
        document.getElementById(cardId).style.background = "#a8def0";
    }

   generate() {
    const mainPanel = document.getElementById("main");
    mainPanel.innerHTML = ""; // Clear existing cards

    const numberOfCards = game.limit || 8; // Default to 8 if game.limit is not set
    const totalCardTypes = Math.ceil(numberOfCards / 2); // We want each card type to have at least one pair
    const cardTypes = Array.from({ length: totalCardTypes }, (_, index) => index + 1); // Create an array of unique card types

    let cardCounter = 0;
    for (let i = 0; i < totalCardTypes; i++) {
        const cardType = cardTypes[i];
        for (let j = 0; j < 2; j++) { // We need two cards for each card type (to form a pair)
            const cardId = this.idCard(cardType, j + 1);

            // Create card element
            const cardElement = document.createElement("img");
            cardElement.id = cardId;
            cardElement.src = "images/0.png"; // Initial image set to "0.png"
            cardElement.onclick = function() {
                card.select(cardType, j + 1);
            };

            // Add card element to main panel
            mainPanel.appendChild(cardElement);
            cardCounter++;

            if (cardCounter >= numberOfCards) {
                break; // Exit loop if we've reached the desired number of cards
            }
        }
    }
}

    // generate() {
    //     const mainPanel = document.getElementById("main");
    //     mainPanel.innerHTML = ""; // Clear existing cards

    //     const numberOfCards = game.limit; // Adjust as needed
    //     const cardTypes = [1, 2, 3, 4]; // Adjust as needed
    //     const totalUniqueCards = numberOfCards / cardTypes.length;

    //     let cardCounter = 0;
    //     for (let i = 0; i < cardTypes.length; i++) {
    //         const cardType = cardTypes[i];
    //         for (let j = 0; j < totalUniqueCards; j++) {
    //             const cardId = this.idCard(cardType, j + 1);

    //             // Create card element
    //             const cardElement = document.createElement("img");
    //             cardElement.id = cardId;
    //             cardElement.src = "images/0.png"; // Initial image set to "0.png"
    //             cardElement.onclick = function() {
    //                 card.select(cardType, j + 1);
    //             };

    //             // Add card element to main panel
    //             mainPanel.appendChild(cardElement);
    //             cardCounter++;

    //             if (cardCounter >= numberOfCards) {
    //                 break; // Exit loop if we've reached the desired number of cards
    //             }
    //         }
    //     }
    // }

    panel() {
        const mainPanel = document.getElementById("main");
        mainPanel.innerHTML = ""; // Clear existing cards

        // Generate cards
        this.generate();

        // Add animation for card entrance
        gsap.from(mainPanel.querySelectorAll('img'), { opacity: 0, y: -50, duration: 1, stagger: 0.1 });
    }
    clear() {
        const mainPanel = document.getElementById("main");
        mainPanel.innerHTML = ""; // Clear existing cards
    }
}

const card = new Card();

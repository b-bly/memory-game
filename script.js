//window.onload = function () {
//Constants
const CARD_WIDTH = 30; //each card is a square.  unit is pixels
const CARD_COLOR = 'gray';
const BOARD_X = 0; //starting position of first card in upper left corner of board
const BOARD_Y = 0;
const CARD_MARGIN = 10; // margin between cards
const BOARD_WIDTH = 4; //number of cards on one side of the board
const SHAPE_PADDING = 2;

//draw the board--squares to represent the back side of cards.
function drawBoard() {
    let ctx = myGameArea.context;
    gameShapes.forEach((currentCard, i) => {
        if (currentCard.removed == false) {
            if (currentCard.show == false) {
                currentCard.drawCard();
            } else {
                currentCard.drawShape();
                console.log('drawBoard, show == true');
                console.log(currentCard);

            }
        }
    });
}

//startGame called in html body
function startGame() {
    myGameArea.start();
}

let myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 480;
        this.canvas.height = 270;
        //this.canvas.style.cursor = "none";
        this.context = this.canvas.getContext("2d");
        this.cardsShown = 0;
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        window.addEventListener('mouseup', function (e) {
            myGameArea.x = e.pageX;
            myGameArea.y = e.pageY;
        });
        this.interval = setInterval(updateGameArea, 100);

        //initialize
        initializeGame();
        //console.log(gameShapes); 
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function initializeGame() {
    createGameShapes();
    //createCards();
    drawBoard();
    // gameShapes.forEach((shape, i) => {
    //     shape.drawShape();
    // });
}

function updateGameArea() {
    myGameArea.clear();

    // need a variable (in gameArea ?) to keep track of number of clicks.
    // Don't count the second click if it's a card that's already clicked show = true.

    //if a card is clicked
    if (myGameArea.x &&
        myGameArea.y) {
        //if a card not already shown is clicked, show it and update number of cardsShown
        gameShapes.forEach((shape, i) => {
            if (shape.clicked() == true &&
                shape.show == false) {
                shape.show = true;
                myGameArea.cardsShown++;
            }
        });
        myGameArea.x = false;
        myGameArea.y = false;
    }
    //if 2 or more cards are shown,
    //pause for a second, add an animation or highlight?
    //removed = true, and update score


    if (myGameArea.cardsShown > 1) {
        //if it's a match
        myGameArea.cardsShown = 0;
        let firstCard = {};
        let secondCard = {};
        let counter = 0;
        gameShapes.forEach((card, i) => {
            if (card.show == true) {
                counter++;
                if (counter == 1) {
                    firstCard = card;

                } else if (counter == 2) {
                    secondCard = card;
                } else {
                    console.log('Error: more than 2 cards shown');

                }
            }
        });
        const itsAMatch = (firstCard.type == secondCard.type &&
            firstCard.color == secondCard.color);
        setTimeout(() => {
            gameShapes.forEach((card, i) => {
                if (card.show == true) {
                    if (itsAMatch == true) {
                        card.removed = true;
                    }
                    //regardless of if it's a match, don't show the card.
                    gameShapes[i].show = false;
                    console.log('updateGameArea, card.show == true: ');
                    console.log(card);

                }
            });
        }, 1000);
    }
    drawBoard();
}
//}
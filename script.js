//window.onload = function () {
//Constants
const CARD_WIDTH = 30; //each card is a square.  unit is pixels
const CARD_COLOR = 'gray';
const BOARD_X = 0; //starting position of first card in upper left corner of board
const BOARD_Y = 0;
const CARD_MARGIN = 10; // margin between cards
const BOARD_WIDTH = 4; //number of cards on one side of the board
const SHAPE_PADDING = 2;
const BOARD_WIDTH_PIXELS = BOARD_WIDTH * CARD_WIDTH + (BOARD_WIDTH - 1) * CARD_MARGIN;
const OFFSET_X = 50;
const OFFSET_Y = 50;
const CANVAS_X = 100;
const CANVAS_Y = 100;
let score = 0;

let myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 500;
        this.canvas.height = 500;
        
        //this.canvas.style.cursor = "none";
        this.context = this.canvas.getContext("2d");
        //this.context.save();
        this.context.translate(CANVAS_X, CANVAS_Y);
        this.context.fillStyle = 'lightgray';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
       // this.context.restore();

        this.cardsShown = 0;
        this.context.interval = setInterval(() => {
            if (!this.pause) {
                updateGameArea();
            }
        }, 100);
        this.pause = false;
        document.body.insertBefore(this.canvas, document.body.childNodes[1]);
        window.addEventListener('mouseup', function (e) {
            myGameArea.x = e.pageX - CANVAS_X;
            myGameArea.y = e.pageY - CANVAS_Y;
        });
        //initialize
        initializeGame();
        //console.log(gameShapes); 
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //this.context.save();
       // this.context.translate(100, 100);
        this.context.fillStyle = 'lightgray';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        //this.context.restore();
    }
}

// let title = new Text(10, 50, "Memory Game", "20px Arial", 'blue');
// title.canvas.id = 'title';

//startGame called in html body
function startGame() {
    // title.write();
    myGameArea.start();
}

function initializeGame() {
    myGameArea.canvas.id = 'myGameArea';
    createGameShapes();
    drawBoard();
   writeScore();
}

function updateGameArea() {
    myGameArea.clear();
    flipCards();
    drawBoard();
    writeScore();
}


//draw the board--squares to represent the back side of cards.
function drawBoard() {
    let ctx = myGameArea.context;
    gameShapes.forEach((currentCard, i) => {
        if (currentCard.removed == false) {
            if (currentCard.show == false) {
                currentCard.drawCard();
            } else {
                currentCard.drawShape();
            }
        } else {

            
        }
    });
}

function flipCards() {
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
        myGameArea.pause = true;        
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
                        score += .5;
                        card.removed = true;
                    }
                    //regardless of if it's a match, don't show the card.
                    gameShapes[i].show = false;
                }
            });
            myGameArea.pause = false;
        }, 1000);
    }
}

function writeScore () {
    let ctx = myGameArea.context;
    ctx.font = '20px Ariel';
    //ctx.fillStyle = this.fillStyle;
    ctx.fillText('Score: ' + score,5,30);
}
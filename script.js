//window.onload = function () {
//Constants
const CARD_WIDTH = 30; //each card is a square.  unit is pixels
const CARD_COLOR = 'gray';
const BOARD_X = 0; //starting position of first card in upper left corner of board
const BOARD_Y = 0;
const CARD_MARGIN = 10; // margin between cards
const BOARD_WIDTH = 5; //number of cards on one side of the board
const SHAPE_PADDING = 2;

//draw the board--squares to represent the back side of cards.
function drawBoard() {
    let ctx = myGameArea.context;
    gameShapes.forEach((currentCard, i) => {
        if (currentCard.show == false) {
            currentCard.drawCard();
        } else {
            currentCard.drawShape();
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
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        window.addEventListener('mouseup', function (e) {
            myGameArea.x = e.pageX;
            myGameArea.y = e.pageY;
        });
        this.interval = setInterval(updateGameArea, 20);

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

    //if card is clicked once ...
    if (myGameArea.x && myGameArea.y) {
        gameShapes.forEach((shape, i) => {
            if (shape.clicked() == true) {
                shape.show = true;
            }
        });
    }
    drawBoard();
    //if card is clicked the 2nd time...
}
//}
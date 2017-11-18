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
        ctx.fillStyle = CARD_COLOR;
        ctx.fillRect(currentCard.x, currentCard.y, CARD_WIDTH, CARD_WIDTH);
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
        this.canvas.style.cursor = "none";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        window.addEventListener('mouseup', function (e) {
            myGameArea.x = false;
            myGameArea.y = false;
        })
        //this.interval = setInterval(updateGameArea, 20);

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
    //if card is clicked once ...
    //if card is clicked the 2nd time...
}
//}
// made with some code copied from https://www.w3schools.com/graphics/game_components.asp

const CARD_WIDTH = '30'; //each card is a square.  unit is pixels
const CARD_COLOR = 'gray';
const BOARD_X = 0; //starting position of first card in upper left corner of board
const BOARD_Y = 0;
const CARD_MARGIN = 2; // margin between cards
const BOARD_WIDTH = 2; //number of cards on one side of the board

//Shapes


//draw the board--squares to represent the back side of cards.
function drawBoard() {
    let ctx = myGameArea.context;
    for (let j = 0; j < BOARD_WIDTH; j++) {
        let offsetY = j * CARD_WIDTH;
        if (j > 0) {
            offsetY += 5;
        }
        for (let i = 0; i < BOARD_WIDTH; i++) {
            ctx.fillStyle = CARD_COLOR;
            let offsetX = i * CARD_WIDTH;
            if (i > 0) {
                offsetX += 5;
            }

            ctx.fillRect(BOARD_X + offsetX, BOARD_Y + offsetY, CARD_WIDTH, CARD_WIDTH);
        }
    }
}

let myGamePiece;
//startGame called in html body
function startGame() {

    myGameArea.start();
}

const myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        //this.interval = setInterval(updateGameArea, 20);
        updateGameArea();
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}



// function component(width, height, color, x, y) {
//     this.width = width;
//     this.height = height;
//     this.x = x;
//     this.y = y;    
//     this.update = function(){
//         ctx = myGameArea.context;
//         ctx.fillStyle = color;
//         ctx.fillRect(this.x, this.y, this.width, this.height);
//     }
// }

function updateGameArea() {
    myGameArea.clear();
    drawBoard();
}
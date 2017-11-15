// made with some code copied from https://www.w3schools.com/graphics/game_components.asp

//Next steps:
//shapes
//make a shapes class
//figure out a way to randomly assign shapes to each card position.
//generate an array with the shapes in a random order.
//array length sould be the same as the board width x board width
//iterate over shapeArray and assign x, y positions.
//when a card is clicked, search the array for the shape that matches the x, y

//baby steps:
    //1. draw shape at x, y = 0, 0
    //2. fill board with shapes
    //3. randomize
    //4. appear only on mouse up
    //5. card lightens on mouse hover
    //6. if cards match, clear and update score
    //if not, turn over again.
    //7. if all cards are gone, call game over function.
    //8. option to play again.
    //9.  give user option to change board size.

//Constants
const CARD_WIDTH = '30'; //each card is a square.  unit is pixels
const CARD_COLOR = 'gray';
const BOARD_X = 0; //starting position of first card in upper left corner of board
const BOARD_Y = 0;
const CARD_MARGIN = 2; // margin between cards
const BOARD_WIDTH = 2; //number of cards on one side of the board
const SHAPE_PADDING = 2;



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

//Shapes
//draw in a 26 x 26 area centered in the 30 x 30 sqare for 4 px of padding
//from 2 to 28
const diamond = {
    update: function () {
        //if (myGameArea.context) {
            let ctx = myGameArea.context;
            ctx.beginPath();
            ctx.moveTo(2, 16);
            ctx.lineTo(14, 28);
            ctx.lineTo(28, 16);
            ctx.lineTo(16, 2);
            ctx.fill();
        //}
    }
}
// const triangle;
// const pacman;
// const diamond;
// const heart;



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
    //drawBoard();
    diamond.update();
}
// made with some code copied from https://www.w3schools.com/graphics/game_components.asp

//opening index
//file:///Users/other/dev%20projects/memory-game/index.html

//Next steps:
//shapes
//make a shapes class
//figure out a way to randomly assign shapes to each card position.
//generate an array with the shapes in a random order.
//array length sould be the same as the board width x board width
//iterate over shapeArray and assign x, y positions.
//when a card is clicked, search the array for the shape that matches the x, y

//baby steps:
//x 1. draw shape at x, y = 0, 0
//need a transform function that moves smilies to the square they're supposed to be.
//pass color to update function?  To get different color shapes.
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
        ctx.transform(1, 0, 0, 1, 2, 2);
        ctx.beginPath();
        ctx.moveTo(0, 14);
        ctx.lineTo(14, 28);
        ctx.lineTo(28, 14);
        ctx.lineTo(14, 0);
        ctx.lineTo(0, 14);
        ctx.fill();
        //}
    }
}

const diamondStroke = {
    update: function () {
        //if (myGameArea.context) {
        let ctx = myGameArea.context;
        ctx.transform(1, 0, 0, 1, 2, 2);
        ctx.beginPath();
        ctx.moveTo(0, 14);
        ctx.lineTo(14, 28);
        ctx.lineTo(28, 14);
        ctx.lineTo(14, 0);
        ctx.lineTo(0, 14);
        ctx.stroke();
        //}
    }
}

const smiley = {
    update: function () {
        let ctx = myGameArea.context;
        //transform method lets you just move the object, so I don't need to add 2 pixels to each parameter
        ctx.transform(1, 0, 0, 1, 2, 2);
        ctx.beginPath();
        ctx.arc(14, 14, 14, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(25, 14);
        ctx.arc(14, 14, 10, 0, Math.PI, false);  // Mouth (clockwise)
        ctx.moveTo(8, 9);
        ctx.arc(7, 9, 1, 0, Math.PI * 2, true);  // Left eye
        ctx.moveTo(19, 9);
        ctx.arc(20, 9, 1, 0, Math.PI * 2, true);  // Right eye
        ctx.stroke();
    }
}

const circle = {
    update: function () {
        let ctx = myGameArea.context;
        //transform method lets you just move the object, so I don't need to add 2 pixels to each parameter
        ctx.transform(1, 0, 0, 1, 2, 2);
        ctx.beginPath();
        ctx.arc(14, 14, 14, 0, Math.PI * 2, true); // Outer circle
        ctx.stroke()
    }
}

const circleFilled = {
    update: function () {
        let ctx = myGameArea.context;
        //transform method lets you just move the object, so I don't need to add 2 pixels to each parameter
        ctx.transform(1, 0, 0, 1, 2, 2);
        ctx.beginPath();
        ctx.arc(14, 14, 14, 0, Math.PI * 2, true); // Outer circle
        ctx.fill()
    }
}
//arc parameters:
//center x, y, radius, starting angle, final angle radians, clockwise = true;

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
    circleFilled.update();
}
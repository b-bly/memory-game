
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
    //store shapes to be displayed in clickedShapesArray
    //each mouse click event, add a shape object to array of shapes that will be shown (max 2);
    //after 2nd click, clear the clickedShapesArray
//x 2. fill board with shapes
//x 3. randomize
//push shape objects to an array in random order.
//add color property--store in object with color list for each shape:
//const colorsByShape = {
// diamond: ['red', 'orange', ...]
//    }
//then give them a coordinates property (0, 0) for the first card, etc.
//the draw function will need to multiply by card width + CARD_MARGIN to get the correct coordinates
//4. appear only on mouse up
//5. card lightens on mouse hover
//6. if cards match, clear and update score
//if not, turn over again.
//7. if all cards are gone, call game over function.
//8. option to play again.
//9.  give user option to change board size.

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
    for (let j = 0; j < BOARD_WIDTH; j++) {
        let offsetY = j * CARD_WIDTH;
        if (j > 0) {
            offsetY += CARD_MARGIN * j;
        }
        for (let i = 0; i < BOARD_WIDTH; i++) {
            ctx.fillStyle = CARD_COLOR;
            let offsetX = i * CARD_WIDTH;
            if (i > 0) {
                offsetX += CARD_MARGIN * i;
            }
            console.log('drawBoard: offsetX: ');
            console.log(offsetX);
            
            ctx.fillRect(BOARD_X + offsetX, BOARD_Y + offsetY, CARD_WIDTH, CARD_WIDTH);
        }
    }
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
        window.addEventListener('mousemove', function (e) {
            myGameArea.x = e.pageX;
            myGameArea.y = e.pageY;
        })
        createShapesAndColors();
        createGameShapes();
        drawBoard();
        console.log(gameShapes);
        //this.interval = setInterval(updateGameArea, 20);
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
    // gameShapes.forEach((shape, i) => {
    //     shape.update(shape.coordinates, shape.color);
    // });
    drawBoard();
}
//}
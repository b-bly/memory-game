
//Shapes
//draw in a 26 x 26 area centered in the 30 x 30 sqare for 4 px of padding
//from 2 to 28
let diamond = {
    coordinates: [0, 0],
    color: 'red',
    update: (coordinates, color) => {
        //if (myGameArea.context) {
        let ctx = myGameArea.context;
        ctx.save();
        ctx.transform(1, 0, 0, 1, 2 + coordinates[0], 2 + coordinates[1]);
        ctx.beginPath();
        ctx.moveTo(0, 14);
        ctx.lineTo(14, 28);
        ctx.lineTo(28, 14);
        ctx.lineTo(14, 0);
        ctx.lineTo(0, 14);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();
        //}
    }
}
//arc parameters:
//center x, y, radius, starting angle, final angle radians, clockwise = true;

// const triangle;
// const pacman;
// const diamond;
// const heart;
const diamondStroke = {
    update: function (coordinates, color) {
        //if (myGameArea.context) {
        let ctx = myGameArea.context;
        ctx.save();        
        ctx.transform(1, 0, 0, 1, 2 + coordinates[0], 2 + coordinates[1]);
        ctx.beginPath();
        ctx.moveTo(0, 14);
        ctx.lineTo(14, 28);
        ctx.lineTo(28, 14);
        ctx.lineTo(14, 0);
        ctx.lineTo(0, 14);
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.restore();
        //}
    }
}

const smiley = {
    update: function (coordinates, color) {
        let ctx = myGameArea.context;
        ctx.save();
        //transform method lets you just move the object, so I don't need to add 2 pixels to each parameter
        ctx.transform(1, 0, 0, 1, 2 + coordinates[0], 2 + coordinates[1]);
        ctx.beginPath();
        ctx.arc(14, 14, 14, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(25, 14);
        ctx.arc(14, 14, 10, 0, Math.PI, false);  // Mouth (clockwise)
        ctx.moveTo(8, 9);
        ctx.arc(7, 9, 1, 0, Math.PI * 2, true);  // Left eye
        ctx.moveTo(19, 9);
        ctx.arc(20, 9, 1, 0, Math.PI * 2, true);  // Right eye
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.restore();
    }
}

const circle = {
    update: function (coordinates, color) {
        let ctx = myGameArea.context;
        ctx.save();
        //transform method lets you just move the object, so I don't need to add 2 pixels to each parameter
        ctx.transform(1, 0, 0, 1, 2 + coordinates[0], 2 + coordinates[1]);
        ctx.beginPath();
        ctx.arc(14, 14, 14, 0, Math.PI * 2, true); // Outer circle
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.restore();
    }
}

const circleFilled = {
    update: function (coordinates, color) {
        let ctx = myGameArea.context;
        ctx.save();        
        //transform method lets you just move the object, so I don't need to add 2 pixels to each parameter
        ctx.transform(1, 0, 0, 1, 2 + coordinates[0], 2 + coordinates[1]);
        ctx.beginPath();
        ctx.arc(14, 14, 14, 0, Math.PI * 2, true); // Outer circle
        //ctx.fillStyle(color);
        ctx.fill();
        ctx.restore();
    }
}

const shapes = [diamond, diamondStroke, smiley, circle, circleFilled];
const colors = ['red', 'orange', 'black', 'green', 'blue', 'purple'];
let shapesAndColors = [];
let gameShapes = [];
//BOARD_WIDTH is number of cards in one row
function createShapesAndColors() {
    shapesAndColors = [];
    shapes.forEach((shape, i) => {
        colors.forEach((color, j) => {
            let shapeCopy = Object.assign({}, shape);
            shapeCopy.color = color;
            shapesAndColors.push(shapeCopy);
        });
    });
}

function createGameShapes() {
    let numberCards = BOARD_WIDTH * BOARD_WIDTH;
    let randomArray = [];
    for (let i = 0; i < numberCards; i++) {
        let random = Math.floor(Math.random() * numberCards);
        while (randomArray.includes(random) === true) {
            random = Math.floor(Math.random() * numberCards);
        }
        randomArray.push(random);
    }  
    for (let i = 0; i < numberCards; i++) {
        //const random = randomArray[i];
        const shape = shapesAndColors[i];
        const x = ((i) % BOARD_WIDTH) * CARD_WIDTH + CARD_MARGIN; //5 - 1 % 5 = 4
        //RANDOM = 5: 5 - 1 / 5  = 0
        //random = 9: 11 - 1/ 5 = 2
        const y = (Math.floor((i) / BOARD_WIDTH)) * CARD_WIDTH + CARD_MARGIN;
        shape.coordinates = [x, y];
        console.log(shape.coordinates);
        gameShapes.push(shape);
    }
}
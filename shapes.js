
const shapes = ['diamond', 'diamondStroke', 'smiley', 'circle', 'circleFilled'];
const colors = ['red', 'orange', 'black', 'green', 'blue', 'purple'];
let shapesAndColors = [];
let gameShapes = [];
//BOARD_WIDTH is number of cards in one row

function createGameShapes() {
    const numberCards = BOARD_WIDTH * BOARD_WIDTH;
    let randomArray = [];
    let numberOfAllPossibleCards = shapes.length * colors.length;
    if (numberCards % 2 != 0) {
        console.log('Error: odd number of cards');
    }
    //this makes the number of pairs we need
    for (let i = 0; i < numberCards / 2; i++) {
        let random = Math.floor(Math.random() * numberOfAllPossibleCards);
        while (randomArray.includes(random) === true) {
            random = Math.floor(Math.random() * numberOfAllPossibleCards);
        }
        randomArray.push(random);
    }
    //shuffle in the pair of each card:
    const length = randomArray.length;    
    randomArray.forEach((number) => {
        let random = randomArray[Math.floor(Math.random() * length)];
        randomArray.push(random);
    });

    for (let i = 0; i < numberCards; i++) {
        const random = randomArray[i];
        let shape = {};
        const color = colors[random % colors.length];
        const shapeType = shapes[Math.floor(random / colors.length)];
        const x = ((i) % BOARD_WIDTH) * CARD_WIDTH + ((i) % BOARD_WIDTH) * CARD_MARGIN; //5 - 1 % 5 = 4
        const y = (Math.floor((i) / BOARD_WIDTH)) * CARD_WIDTH + (Math.floor((i) / BOARD_WIDTH)) * CARD_MARGIN;

        switch (shapeType) {
            case 'diamond':
                shape = new Diamond(x, y, color);
                break;
            case 'diamondStroke':
                shape = new DiamondStroke(x, y, color);
                break;
            case 'smiley':
                shape = new Smiley(x, y, color);
                break;
            case 'circle':
                shape = new Circle(x, y, color)
                break;
            case 'circleFilled':
                shape = new CircleFilled(x, y, color);
                break;
            default:
                shape = {};
                console.log('ERROR shapes.js: createGameShapes: no shape assigned');
                break;
        }
        gameShapes.push(shape);
    }
    console.log('gameShapes: ');
    console.log(gameShapes);

}
// function createShapesAndColors() {
//     shapesAndColors = [];
//     shapes.forEach((shape, i) => {
//         colors.forEach((color, j) => {
//             let shapeCopy = Object.assign({}, shape);
//             shapeCopy.color = color;
//             shapesAndColors.push(shapeCopy);
//         });
//     });
// }

// function createGameShapes() {
//     let numberCards = BOARD_WIDTH * BOARD_WIDTH;
//     let randomArray = [];
//     for (let i = 0; i < numberCards; i++) {
//         let random = Math.floor(Math.random() * numberCards);
//         while (randomArray.includes(random) === true) {
//             random = Math.floor(Math.random() * numberCards);
//         }
//         randomArray.push(random);
//     }
//     for (let i = 0; i < numberCards; i++) {
//         const random = randomArray[i];
//         let shape = shapesAndColors[random];
//         const x = ((i) % BOARD_WIDTH) * CARD_WIDTH + ((i) % BOARD_WIDTH) * CARD_MARGIN; //5 - 1 % 5 = 4
//         //RANDOM = 5: 5 - 1 / 5  = 0
//         //random = 9: 11 - 1/ 5 = 2
//         const y = (Math.floor((i) / BOARD_WIDTH)) * CARD_WIDTH + (Math.floor((i) / BOARD_WIDTH)) * CARD_MARGIN;
//         shape.coordinates = [x, y];
//         //console.log(shape.coordinates);
//         gameShapes.push(shape);
//     }
// }

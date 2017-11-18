
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
//need to redesign cards as individual objects to do this.
//properties:
//x
//y
//methods:
//draw - draw the card
//clicked: detect a mouseup

//5. card lightens on mouse hover
//6. if cards match, clear and update score
//if not, turn over again.
//7. if all cards are gone, call game over function.
//8. option to play again.
//9.  give user option to change board size.
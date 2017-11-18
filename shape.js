//Shapes
//starbucks 49663
//draw in a 26 x 26 area centered in the 30 x 30 sqare for 4 px of padding
//from 2 to 28
class Diamond extends Card {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
        this.type = 'diamond';
        
    }
    drawShape () {
        //if (myGameArea.context) {
        let ctx = myGameArea.context;
        ctx.save();
        ctx.transform(1, 0, 0, 1, 2 + this.x, 2 + this.y);
        ctx.beginPath();
        ctx.moveTo(0, 14);
        ctx.lineTo(14, 28);
        ctx.lineTo(28, 14);
        ctx.lineTo(14, 0);
        ctx.lineTo(0, 14);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }
}
//arc parameters:
//center x, y, radius, starting angle, final angle radians, clockwise = true;

// const triangle;
// const pacman;
// const diamond;
// const heart;
class DiamondStroke extends Card {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
        this.type = 'diamondStroke';
        
    }
    drawShape() {
        //if (myGameArea.context) {
        let ctx = myGameArea.context;
        ctx.save();
        ctx.transform(1, 0, 0, 1, 2 + this.x, 2 + this.y);
        ctx.beginPath();
        ctx.moveTo(0, 14);
        ctx.lineTo(14, 28);
        ctx.lineTo(28, 14);
        ctx.lineTo(14, 0);
        ctx.lineTo(0, 14);
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.restore();
        //}
    }
}

class Smiley extends Card {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
        this.type = 'smiley';
        
    }
    drawShape () {
        //if (myGameArea.context) {
        let ctx = myGameArea.context;
        ctx.save();
        ctx.transform(1, 0, 0, 1, 2 + this.x, 2 + this.y);
        ctx.beginPath();
        ctx.arc(14, 14, 14, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(25, 14);
        ctx.arc(14, 14, 10, 0, Math.PI, false);  // Mouth (clockwise)
        ctx.moveTo(8, 9);
        ctx.arc(7, 9, 1, 0, Math.PI * 2, true);  // Left eye
        ctx.moveTo(19, 9);
        ctx.arc(20, 9, 1, 0, Math.PI * 2, true);  // Right eye
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.restore();
    }
}

class Circle extends Card {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
        this.type = 'circle';
        
    }
    drawShape() {
        //if (myGameArea.context) {
        let ctx = myGameArea.context;
        ctx.save();
        ctx.transform(1, 0, 0, 1, 2 + this.x, 2 + this.y);
        ctx.beginPath();
        ctx.arc(14, 14, 14, 0, Math.PI * 2, true); // Outer circle
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.restore();
    }
}

class CircleFilled extends Card {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
        this.type = 'circleFilled';
    }
    drawShape() {
        //if (myGameArea.context) {
        let ctx = myGameArea.context;
        ctx.save();
        ctx.transform(1, 0, 0, 1, 2 + this.x, 2 + this.y);
        ctx.beginPath();
        ctx.arc(14, 14, 14, 0, Math.PI * 2, true); // Outer circle
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }
}
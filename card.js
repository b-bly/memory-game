class Card {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.update = function () {
            let ctx = myGameArea.context;
            ctx.fillStyle = CARD_COLOR;
            ctx.fillRect(this.x, this.y, CARD_WIDTH, CARD_WIDTH);
        }
        this.clicked = function () {
            let myleft = this.x;
            let myright = this.x + (CARD_WIDTH);
            let mytop = this.y;
            let mybottom = this.y + (CARD_WIDTH);
            let clicked = true;
            if ((mybottom < myGameArea.y) || (mytop > myGameArea.y)
                || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
                clicked = false;
            }
            return clicked;
        }
    }
}
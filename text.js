class Text {
    constructor (x, y, text, font, fillStyle) {
        this.x = x;
        this.y = y;
        this.text = text;
        this.font  = font;
        this.fillStyle = fillStyle;

        this.width = 200;
        this.height = 100;
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");    
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.ctx.font = this.font;
        this.ctx.fillStyle = this.fillStyle;
    }
    write () {
        this.ctx.fillText(this.text,5,30);
        console.log('text canvas');
        console.log(this.canvas);
    }
    clear () {
        this.ctx.clearRect(this.x, this.y, this.width, this.height)
    }

}


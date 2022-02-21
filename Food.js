class Food {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, unit, unit);
    }
    getRandom() {
        this.x = Math.floor(Math.random() * 350);
        this.y = Math.floor(Math.random() * 350);
        this.draw();
    }
}

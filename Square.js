const MAX_SCORE = 100;
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
const unit = 20;
class Snake {
    constructor() {
        this.body = (
            new vecto(300, 100)
        )
        this.speed = new vecto(-1, 0);
        this.score = 0;
    }
    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.body.x, this.body.y, unit, unit);
    }

    move(Food) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.body.x += this.speed.x * unit;
        this.body.y += this.speed.y * unit;
        this.colission(Food)
        Food.draw();
        this.draw();
        this.gameOver();
        this.checkWin();
    }


    gameOver() {
        if (this.body.x < 0) {
            this.body= new vecto(10000,10000);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "30px Arial";
            ctx.fillText("GAME OVER", 120, 150); 
            this.score = 0;
            document.getElementById('result').innerHTML = "Socre: " + this.score;
        } else if ((this.body.x + unit) > canvas.width) {
            this.body= new vecto(10000,10000);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "30px Arial";
            ctx.fillText("GAME OVER", 120, 150);
            this.score = 0;
            document.getElementById('result').innerHTML = "Socre: " + this.score;
        } else if (this.body.y < 0) {
            this.body= new vecto(10000,10000);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "30px Arial";
            ctx.fillText("GAME OVER", 120, 150);
            this.score = 0;
            document.getElementById('result').innerHTML = "Socre: " + this.score;
        } else if ((this.body.y + unit) > canvas.height) {
            this.body= new vecto(10000,10000);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "30px Arial";
            ctx.fillText("GAME OVER", 120, 150);
            this.score = 0;
            document.getElementById('result').innerHTML = "Socre: " + this.score;
        }
    }


    colission(Food) {
        let a = this.body.x;
        let b = this.body.y;
        if ((b + unit) > Food.y && (Food.y + unit) > b) {
            if ((a + unit) > Food.x && (Food.x + unit) > a) {
                Food.getRandom();
                this.draw();
                this.score += 10;
                document.getElementById('result').innerHTML = "Socre: " + this.score;
                console.log(this.body)
            }
        }

    }

    checkWin() {
        if (this.score == MAX_SCORE) {
            this.speed = new vecto(0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "30px Arial";
            ctx.fillText("YOU WIN", 120, 150);
        }
    }
}
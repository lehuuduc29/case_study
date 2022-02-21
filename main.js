
const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;


document.onkeydown = function (c) {
    switch (c.keyCode) {
        case LEFT:
            player.speed = new vecto(-1, 0);
            break;
        case RIGHT:
            player.speed = new vecto(1, 0);
            break;
        case UP:
            player.speed = new vecto(0, -1);
            break;
        case DOWN:
            player.speed = new vecto(0, 1);
            break;

    }
}



let player = new Snake();
let food = new Food();

function reset() {
    clearInterval(myVar);
    player.score=0;
    document.getElementById("result").innerHTML= "Score: " + player.score;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.body=new vecto(300, 100);
    player.speed = new vecto(-1, 0);
}

function start() {
    food.getRandom();
    myVar = setInterval(() => {
        player.move(food);
    }, 200);
}







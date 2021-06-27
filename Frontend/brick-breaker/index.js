const cnvs = /** @type {HTMLCanvasElement} */ document.getElementById("container");
const ctx = cnvs.getContext("2d");

ctx.lineWidth = 3;

// Image SRC
const IMG = new Image();
IMG.src = "./images/main.png";

// PADDLE CONSTANTS
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20; 

// PADDLE VARIABLES
const paddle = {
    x: cnvs.width/2 - PADDLE_WIDTH/2,
    y: cnvs.height - 50 - PADDLE_HEIGHT,
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    dx: 5
}

// DRAW PADDLE 
function drawPaddle() {
    ctx.fillStyle = "blue";
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

    ctx.strokeStyle = "orange";
    ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

// CONTROL PADDLE
let left = false;
let right = false;

document.addEventListener("keydown", function(e) {
    if(e.keyCode === 37){
        console.log("left pressed");
        left = true;
    }else if(e.keyCode === 39){
        right = true;
    }
});

document.addEventListener("keyup", function(e) {
    if(e.keyCode === 37){
        left = false;
    }else if(e.keyCode === 39){
        right = false;
    }
});

// MOVE PADDLE
function movePaddle(){
    if(right && paddle.x + paddle.width < cnvs.width){
        paddle.x += paddle.dx;
    }else if(left && paddle.x  > 0){
        paddle.x -= paddle.dx;
    }
}

// BALL CONSTANTS
const BALL_RAD = 8;


// BALL VARIABLES
const ball = {
    x: cnvs.width/2,
    y: paddle.y - BALL_RAD,
    radius: BALL_RAD,
    speed: 4,
    dx: 3,
    dy: -3
}

// DRAW BALL
function drawBall(){
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius , 0, 2*Math.PI);
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.stroke();
}

// ALL DRAWINGS
function draw(){
    drawPaddle();
    drawBall();
}

// UPDATE GAME
function update(){
    movePaddle();
}

// MAIN LOOP
function loop(){
    ctx.drawImage(IMG, 0, 0);
    draw();

    update();

    requestAnimationFrame(loop);
}

loop();

function drawRect(x, y){
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 50, 50);
}

const cnvs = /** @type {HTMLCanvasElement} */ document.getElementById("container");
const ctx = cnvs.getContext("2d");

ctx.lineWidth = 3;

// Image SRC
const IMG = new Image();
IMG.src = "./images/main.png";

//LIVES
let LIFE = 3;

//#######################################################

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

//#######################################################


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
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.closePath();
}

// MOVE BALL
function moveBall(){
    ball.x += ball.dx;
    ball.y += ball.dy;
}

// BALL AND WALL COLLISION
function ballWallCollision(){
    // collides right wall
    if(ball.x +  ball.radius > cnvs.width){
        ball.dx = -ball.dx;
    }
    // collides top wall
    if(ball.y - ball.radius < 0){
        ball.dy = -ball.dy;
    }
    // collides left wall
    if(ball.x - ball.radius < 0){
        ball.dx = -ball.dx;
    }
    // collides bottom wall
    if(ball.y + ball.radius > cnvs.height){
        
        for( ; LIFE >= 0; LIFE--){
            resetBall();
        }
    }
}

function resetBall(){
    ball.x = cnvs.width/2;
    ball.y = paddle.y - ball.radius;
    ball.dy = -3;
    ball.dx = (Math.random()*2 - 1) * 3;
}

//#######################################################
 
// BALL PADDLE COLLISION
function ballPaddleCollision(){
    if(ball.y + ball.radius > paddle.y && ball.y < paddle.y + paddle.height && ball.x > paddle.x && ball.x < paddle.x + paddle.width){
        let collidePoint = ball.x - (paddle.x + paddle.width/2);
        collidePoint = collidePoint/(paddle.width/2);
        let angle = collidePoint * (Math.PI/3);
        // let angle = collidePoint * (Math.PI/3)
        ball.dx = ball.speed * Math.sin(angle);
        ball.dy = -ball.speed * Math.cos(angle);
    }
}


//#######################################################

// ALL DRAWINGS
function draw(){
    drawPaddle();
    drawBall();
}

// UPDATE GAME
function update(){
    movePaddle();
    moveBall();
    ballWallCollision();
    ballPaddleCollision();
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

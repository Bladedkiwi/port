/*

Paddle Game: 
-Translated from a Python assignment I did for cs241

*/
//grabs canvas
const canvas = document.querySelector('#game');
//set width and height
canvas.width = 400;
canvas.height = 400;
const context = canvas.getContext('2d');
//base set values
const ballRadius = 10;
const paddleWidth = 25;
const paddleHeight = 50;
const scoreHit = 1;
const scoreMiss = 5;
let raf;
let running = false;


//from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    //ceil() returns the smallest integer value that is bigger than or equal to a number
    min = Math.ceil(min);
    max = Math.floor(max);
    //maximum and minimum are inclusive
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const point = {
    x: ballRadius / 2,
    y: getRandomInt(ballRadius, canvas.height),
    getX: function () {
        return this.x;
    },
    getY: function () {
        return this.y;
    }
};
const velocity = {
    dx: getRandomInt(5, 2),
    dy: getRandomInt(5, 2),
    getDX: function () {
        return this.dx;
    },
    getDY: function () {
        return this.dy;
    }
};
const ball = {
    x: point.getX(),
    y: point.getY(),
    dx: velocity.getDX(),
    dy: velocity.getDY(),
    color: "blue",
    draw: function () {
        context.beginPath();
        context.arc(this.x, this.y, ballRadius, 0, Math.PI * 2, true);
        context.closePath();
        context.fillStyle = this.color;
        context.fill();
    },
    advance: function () {
        this.x += this.dx;
        this.y += this.dy;
    },
    checkBoundary: function () {
        //if ball hits top, left, bottom, or right move opposite way
        if (this.y <= 0) {
            this.dy = -this.dy;
        }
        if (this.x <= 0) {
            this.dx = -this.dx;
        }
        if (this.y >= canvas.height) {
            this.dy = -this.dy;
        }
        //if ball hits paddle, award point and bounce ball
        if (this.x >= 385 && this.y < 396 && this.y >= (paddle.y - paddleHeight) && this.y <= (paddle.y + paddleHeight)) {
            this.dx = -this.dx;
            score.num += scoreHit;
        } 
        //if ball passes paddle, sets score and restarts
        if (this.x >= canvas.width) {
            score.num -= scoreMiss;
            this.restart();
        }
    },
    restart: function () {
        //restarts the ball
        this.x = point.getX();
        this.y = point.getY();
        this.dx = getRandomInt(5,2);
        this.dy = getRandomInt(5,2);
    }
    
};
const paddle = {
    x: canvas.width - paddleWidth / 2,
    y: canvas.height / 3,
    color: "white",
    draw: function () {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, paddleWidth, paddleHeight);
    },
    checkHit: function () {
        let tooCloseX = (paddleWidth / 2) + ballRadius;
        let tooCloseY = (paddleHeight / 2) + ballRadius;
        console.log(tooCloseX);
        console.log(Math.abs(ball.x - this.x));
        if (Math.abs(ball.x - this.x) < tooCloseX && Math.abs(ball.y - this.y) < tooCloseY && ball.dx > 0) {
            score.num += scoreHit;
        }
    }
}
const score = {
    num: 0,
    x: 10,
    y: canvas.height - 20,
    draw: function () {
        context.font = "1rem Georgia";
        this.text = `Score: ${this.num}`;
        context.fillText(this.text, this.x, this.y);
    }
}
function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
function update() {
    //wipes board, draws ball, paddle, scores, and moves/checks when the ball hits walls, then calls itself again.
    clear();
    ball.draw();
    paddle.draw();
    score.draw();
    ball.advance();
    ball.checkBoundary();

    raf = window.requestAnimationFrame(update);
}

canvas.addEventListener('mouseover', function (e) {
    //starts the game
    raf = window.requestAnimationFrame(update);
    running = true;
});
canvas.addEventListener('mouseout', function (e) {
    //stops the game
    window.cancelAnimationFrame(raf);
    running = false;
});
canvas.addEventListener('mousemove', function (e) {
    //activates paddle and moves paddle based on mouse
    if (!running) {
        clear();
    }
    paddle.y = (e.clientY - 320);
    paddle.draw();
})

function draw_canvas() {
    //draw game board
    ball.draw();
    paddle.draw();
    score.draw();
}
draw_canvas();
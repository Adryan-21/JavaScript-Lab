export class Ball{
    constructor(canvas, x, y, radius, dx , dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.letter = "A";
    }

    move(){
        this.x += this.dx;
        this.y += this.dy;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "blue";
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText(this.letter, this.x, this.y + 10);
    }

    changeDirection(){
        if (this.x + this.radius > this.canvas.width
            || this.y + this.radius > this.canvas.height
            || this.x - this.radius < 0
            || this.y - this.radius < 0
            
        ){
            this.dy = -this.dy;
            return true;
        }
    }

    setLetter(letter){
        this.letter = letter;
    }

    destory(){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
    }

    
}

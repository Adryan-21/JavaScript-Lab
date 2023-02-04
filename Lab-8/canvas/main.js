import { Ball } from "./ball.js";
const canvas = document.getElementById("canvas");
const pointsSpan = document.querySelector('#points');
const lose = document.querySelector('#lose');
const restart = document.querySelector('#restart');
let ctx;
let ball;
let raf;

function clear(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}
/***
 * Inicjacja sceny
 */
function init(){
    ctx = canvas.getContext("2d");
    ball = new Ball(canvas,200, 40, 40, 0, 2);
    raf = window.requestAnimationFrame(draw);
    ball.setLetter(randomLetter());
}

/***
 * Funkcja wykonywana w pętli
 */
function draw(){
    if(ball.changeDirection()){
        // ball.destory();
        ball = null;
        lose.style.opacity = "1";
    }else{
        clear();                                        //czyszczenie sceny
        ball.move();                                    //przesuniecie obiektu
        ball.draw();                                    //odrysowanie obiektu
        raf = window.requestAnimationFrame(draw);       //ponowne wywołanie funkcji draw przy kolejnym oodrysowaniu okna przeglądarki
    }                    //ewentualna zmiana kierunku
}


// start programu
init();

// punkty
let points = 0;

// losowanie literki
function randomLetter(){
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[Math.floor(Math.random()*letters.length)];
}

// obsługa klawiatury
document.addEventListener("keydown", function(e){
    console.log(e.key, ball.letter);
    if(e.key === (ball.letter).toLowerCase()){
        points++;
        ball = new Ball(canvas,40+Math.floor(Math.random()*(canvas.width-80)), 40, 40, 0, 2);
        ball.setLetter(randomLetter());
    }else{
        points--;
        if(points < 0) {
            points = 0;
            ball.destory();
            lose.style.opacity = "1";
            window.cancelAnimationFrame(raf);
        };
    }
    pointsSpan.innerText = points;
});

// restart
restart.addEventListener("click", function(){
    points = 0;
    window.cancelAnimationFrame(raf);
    pointsSpan.innerText = points;
    lose.style.opacity = "0";
    ball = new Ball(canvas,40+Math.floor(Math.random()*(canvas.width-80)), 40, 40, 0, 2);
    ball.setLetter(randomLetter());
    raf = window.requestAnimationFrame(draw);
});
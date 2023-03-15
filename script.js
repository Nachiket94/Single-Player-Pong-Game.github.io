let activePlayer;
let play = false;
let xWidth = window.innerWidth * 0.5;
let yHeight = (xWidth/3)*2;
function setup(){
    createCanvas(xWidth, yHeight);
    //Create Bars and Pong Ball 
    player1 = new slider(width/6);
    player2 = new slider((width/6)*5);
    pongBall = new pong();
}

function startPlay() {
    play = true;
    console.log("pressed" + play)
}

function keyPressed(){
    if(keyCode == 32){
        play = true;
    }
}

function draw(){
    background(0);
    frameRate(60);
    player1.show();
    player2.show();
    pongBall.show();
    // console.log(play)
    if(play == true){
        pongBall.move();
        sumOfPos1 = pongBall.xpos - pongBall.size/2; //For Player 1
        sumOfPos2 = pongBall.xpos + pongBall.size/2; //For player 2

        // Mapping the strike point to return direction
        mapperFunc1 = map(pongBall.ypos, player1.ypos, player1.ypos + player1.length, -height/80, height/80);
        mapperFunc2 = map(pongBall.ypos, player2.ypos, player2.ypos + player2.length, -3, 3);

        // Strikes Player 2
        if(sumOfPos2 > player2.xpos && sumOfPos2 < player2.xpos+player2.width && pongBall.ypos > player2.ypos && pongBall.ypos < player2.ypos + player2.length){    
            pongBall.strike(mapperFunc2);
            activePlayer = 1;
        }
        // Strikes Player 1
        if(sumOfPos1 < player1.xpos + player1.width && sumOfPos1 > player1.xpos && pongBall.ypos > player1.ypos && pongBall.ypos < player1.ypos + player1.length){
            pongBall.strike(mapperFunc1);
            activePlayer = 2;
        }

        //Switch Between Players after every strike
        if(activePlayer == 1){
            player1.move();
        }else{
            player2.move();
        }

        // Game Over
        if(pongBall.xpos < (pongBall.size/2) || pongBall.xpos > width - (pongBall.size/2)){
            pongBall.stop();
            player1.stop();
            player2.stop();
            play = false;
            console.log("pressed" + play)
            // console.log('Game Over');
        }
        
        if(play == false){
            pongBall.xspeed = width/100;
            pongBall.yspeed = 2;
            activePlayer = 2;
        }
    }
}


let activePlayer = 2;
function setup(){
    createCanvas(800,600);
    //Create Bars and Pong Ball 
    player1 = new slider(100);
    player2 = new slider(680);
    pongBall = new pong();
}

function draw(){
    background(0);
    frameRate(60);
    player1.show();
    player2.show();
    pongBall.show();
    pongBall.move();
    sumOfPos1 = pongBall.xpos - pongBall.size/2; //For Player 1
    sumOfPos2 = pongBall.xpos + pongBall.size/2; //For player 2

    // Mapping the strike point to return direction
    mapperFunc1 = map(pongBall.ypos, player1.ypos, player1.ypos + player1.length, -3, 3);
    mapperFunc2 = map(pongBall.ypos, player2.ypos, player2.ypos + player2.length, -3, 3);

    // Strikes Player 2
    if(sumOfPos2 > player2.xpos && pongBall.ypos > player2.ypos && pongBall.ypos < player2.ypos + player2.length){    
        pongBall.strike(mapperFunc2);
        activePlayer = 1;
    }
    // Strikes Player 1
    if(sumOfPos1 < player1.xpos + player1.width && pongBall.ypos > player1.ypos && pongBall.ypos < player1.ypos + player1.length){
        pongBall.strike(mapperFunc1);
        activePlayer = 2;
    }

    //Switch Between Players after every strike
    if(activePlayer == 1){
        player1.move();
    }else{
        player2.move();
    }
}
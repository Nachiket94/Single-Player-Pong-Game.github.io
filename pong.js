function pong(){
    this.xpos = width/2;
    this.ypos = height/2;
    this.size = height/30;
    this.xspeed = width/120;
    this.yspeed = 2;
    numberOfStrikes = 0;
    // Create Pong Ball
    this.show = function(){
        ellipse(this.xpos, this.ypos, this.size, this.size);
    }
    // Reverse the direction if ball strikes any bar
    this.strike = function(mappedDir){
        this.xspeed = -this.xspeed;
        this.yspeed = mappedDir;
        numberOfStrikes++;
        console.log(numberOfStrikes, this.xspeed);
        if(numberOfStrikes == 10){
            this.xspeed += 0.8;
            numberOfStrikes = 0;
            
        }
    }

    this.move = function(){
        this.xpos += this.xspeed;
        this.ypos += this.yspeed;
        if(this.ypos + this.size/2 > height || this.ypos - this.size/2 < 0){
            this.yspeed = -this.yspeed;
        }
    }

    this.stop = function(){
        this.xspeed = 0;
        this.yspeed = 0;
        this.xpos = width/2;
        this.ypos = height/2;
        this.size = height/30;
    }

}
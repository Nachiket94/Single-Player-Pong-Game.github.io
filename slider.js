function slider(xposition){
    this.xpos = xposition;
    this.length = height/6;
    this.ypos = (height/2) - (this.length/2);
    this.width = this.length/5;
    this.show = function(){
        fill(255);
        rect(this.xpos, this.ypos, this.width, this.length);
        if(this.ypos + this.length > height){
            rect(this.xpos, height-this.length, this.width, this.length);
            this.ypos = height-this.length;
        }else if(this.ypos < 0){
            rect(this.xpos, 0, this.width, this.length);
            this.ypos = 0;
        }
    }

    this.move = function(){
        if(keyIsDown(UP_ARROW)){
            this.ypos -= height/70;
        }
        if(keyIsDown(DOWN_ARROW)){
            this.ypos += height/70;
        }
    }
    
    // Game Over
    this.stop = function(){
        this.xspeed = 0;
        this.yspeed = 0;
        this.xpos = xposition;
        this.length = height/6;
        this.ypos = (height/2) - (this.length/2);
    }

}
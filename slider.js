function slider(xposition){
    this.xpos = xposition;
    this.length = 100;
    this.ypos = (height/2) - (this.length/2);
    this.width = 20;
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
            this.ypos -= 5;
        }
        if(keyIsDown(DOWN_ARROW)){
            this.ypos += 5;
        }
    }
}
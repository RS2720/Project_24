class dustBin{
    contructor(x,y,width, height){
        var options = {
            'isStatic' : true
        }

        this.body = Bodies.rectangle(x,y,width, height, options);
        World.add(world,this.body)
        this.body1.width = width;
        this.body2.width = height;
    }
    display(){
    var pos = this.body.position;
    rectMode(CENTER);
     fill("white");
     rect(pos.x,pos.y, this.width,this.height)
}
}
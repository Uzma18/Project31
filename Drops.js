class Drops {
    constructor(x,y){
        var options ={
            friction:0.1
        }
        this.body = Matter.Bodies.circle(x,y,2,options);
        World.add(world,this.body);
    }
    update(){
        if(this.body.position.y >= 400){
            Matter.Body.setPosition(this.body, {x: random(0,400), y: random(0,400)});
        }
    }
   
    display(){
        var pos = this.body.position;
        stroke("blue");
        fill("blue");
        ellipse(pos.x,pos.y,3,4);
    }



}
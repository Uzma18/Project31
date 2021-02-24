class Umbrella{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.body = Matter.Bodies.circle(x,y,10,options);
        this.image = loadImage("walking_1.png");

        
        World.add(world, this.body);
    }

    display(){
        var pos= this.body.position
        
        image(this.image, pos.x, pos.y, 200, 100);
        
    }




}
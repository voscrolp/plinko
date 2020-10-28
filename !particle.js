class Particle{
    constructor(x,y,radius){
        var options = {
            restitution:0.4,
            density:1
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        this.radius = radius;

        World.add(world,this.body);
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill(this.color);
        circle(0,0,this.radius);
        pop();
    }
}
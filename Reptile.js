class Snake{
    constructor(x,y){

        var option = {
            isStatic: true
        }

        this.body = BODIES.rectangle(x,y,50,20);
        this.width = 50;
        this.height = 20;

        WORLD.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("purple");
        noStroke();
        rect(0, 0, this.width, this.height);
        pop();
    }

}
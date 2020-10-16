class Apple{
    constructor(x,y){

        var option = {
            isStatic: true
        }

        this.body = BODIES.rectangle(x,y,22,30,option);
        this.width = 22;
        this.height = 30;
        this.image = loadImage("sprites/apple.png");

        WORLD.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.width, this.height);
    }

}
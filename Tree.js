class Tree {
    constructor(x,y,w,h) {

        var options = {
            isStatic :  true ,
        }

    this.body = Bodies.rectangle(x,y,w,h,options) ; 
    this.x = x ; 
    this.y = y ; 
    this.w = w ;
    this.h = h ; 
    this.image = loadImage("tree.png") ;
    World.add(world,this.body) ; 
    }

    display () {

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate (this.body.angle) ; 
        imageMode(CENTER);
        image(this.image, 0,0,this.w,this.h);
        pop();

    }
}
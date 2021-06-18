class Stone
{
  constructor (x,y,width,height) {
   
  var options={

  isStatic:false,
  restitution:0,
  friction:1,
  density:1.2

 }
 
this.image=loadImage("stone.png")
this.width = width ;
this.height = height ; 
this.body=Bodies.rectangle(x,y,width,height,options) ; 
World.add(world,this.body)

  }
  display() {

    var paperpos=this.body.position;
    
    push()
    translate(paperpos.x,paperpos.y)
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop()
    
    }
}











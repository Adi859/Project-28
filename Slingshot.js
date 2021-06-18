class Slingshot {

    constructor(bodyA, pointB) {

        var options = {
            bodyA: bodyA ,
            pointB : pointB,
            stiffness : 0.004, 
            length : 12
        }

       // this.bodyA = bodyA ; 
       // this.pointB = pointB ;
        this.body = Constraint.create(options);
        World.add(world, this.body) ; 



    }

    fly() {
	
        this.body.bodyA = null ; 
    }

    
    display() {

        if(this.body.bodyA != null) {

        
        stroke("white");  
        strokeWeight(2) ; 
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.pointB.x,this.body.pointB.y) ; 
        }
        
    }

    




    

    

}

   
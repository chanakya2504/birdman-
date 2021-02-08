class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
           pointB: bodyB,
            stiffness: 0.1,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA!=null){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        push ()
        strokeWeight(4);
        stroke("red")
        
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop ()
        }
    }
    detached(){
        
        this.chain.bodyA=null
    }
}
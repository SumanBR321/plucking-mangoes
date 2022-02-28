class Chain {
    constructor(bodyA,pointB){
        var options = {
            bodyA :bodyA,
            pointB:pointB,
            stiffness : 0.04,
            lenght : 10
    
    }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    
    }
    fly(){
        this.chain.bodyA=null;
    }

    launch(bodyA){
        this.chain.bodyA=bodyA;
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
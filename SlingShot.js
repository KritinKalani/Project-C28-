class SlingShot{
    constructor(bodyA,pointB){
        var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.01,
        length: 20
        }
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    }
    fly(){
        this.slingshot.bodyA = null;
    }
    display(){
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.slingshot.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
    attach(body){
        this.slingshot.bodyA = body;
    }
}
class Rope{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    
    display(){
        var pointC = this.rope.body.position;
        var pointD = this.rope.body.position;
        strokeweight(4);
        line(pointC.x,pointC.y,pointD.x,pointD.y);
    }
}
class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            lenght:10
        }
        this.Sling1=loadImage("sprites/sling1.png")
        this.Sling2=loadImage("sprites/sling2.png")
        this.Sling3=loadImage("sprites/sling3.png")
        this.pointB=pointB
        this.Sling = Constraint.create(options)
        World.add(world,this.Sling)
    }
    attach(body){
        this.Sling.bodyA=body
    }
    fly(){
        this.Sling.bodyA=null
    }
    display(){
        image(this.Sling1,200,20)
        image(this.Sling2,170,20)
        if(this.Sling.bodyA){

        
        var pointA=this.Sling.bodyA.position
        var pointB=this.pointB
        push()
        stroke(48,22,8)
        if(pointA.x<220){
        strokeWeight(7)
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y) 
        line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3) 
        image(this.Sling3,pointA.x-30,pointA.y-10,15,30)
    }else{
        strokeWeight(3)
        line(pointA.x+25,pointA.y,pointB.x-10,pointB.y) 
        line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3) 
        image(this.Sling3,pointA.x+25,pointA.y-10,15,30)
    }
    pop()}}
}
class Stone{
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
       // super(x,y,50,50);
       this.x = x;
       this.y = y;
       this.r = r;
       this.body = Bodies.circle(this.x,this.y,this.r/2,options);
       this.image = loadImage("stone.png");
       World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);//for updating the current position.
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        
      //  super.display();
        pop();
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
      }
      
}

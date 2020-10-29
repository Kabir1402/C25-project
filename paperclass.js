class Paper{
constructor(){
  var options = {
     isStatic:false,
    density: 1.2,
      restitution: 0.3,
      friction: 0.5
  }
    this.body = Bodies.circle(80, 500,15,options)
    this.radius = 5;
    this.image = loadImage("paper.png")
    World.add(world,this.body)

}

display() {
  push();
  imageMode(CENTER)
  image(this.image, this.body.position.x, this.body.position.y, 38, 38)
    pop();
}

}
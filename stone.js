class Stone {
    constructor(x, y) {
      var options = {
        'density':4,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 130;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
     var pos = this.body.position;
     
     push();
     translate(pos.x, pos.y);
      strokeWeight(3);
      stroke('black')
      fill('brown')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
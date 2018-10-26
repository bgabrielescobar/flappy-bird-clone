export default function FlappyBird() {
  this.width = 50;
  this.height = 50;
  this.x = window.innerWidth / 2 - this.width;
  this.y = 0;
  this.acceleration = 0;

  this.update = function() {
    this.collision();
    this.move();
  };
  this.move = function() {
    this.acceleration += 0.09;
    this.y += this.acceleration;
  };
  this.collision = function() {
    if (this.y + this.height > window.innerHeight) {
      this.y = 0;
      this.acceleration = 0;
    }
    if (this.y < 0) {
      this.acceleration = 0;
      this.y = 0;
    }
  };
}

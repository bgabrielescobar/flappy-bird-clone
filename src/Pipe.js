export default function Pipe(x, y) {
  this.width = 80;
  this.height = 300;
  this.x = x - this.width;
  this.y = y;

  this.update = function() {
    this.move();
    this.reset();
  };
  this.move = function() {
    this.x -= 2;
  };
  this.reset = function() {
    if (this.x + this.width < 0) {
      this.width = 80;
      this.height = 300;
      this.x = x;
      this.y = y;
    }
  };
}

function Star() {
  this.x = Math.random() * width | 0;
  this.y = Math.random() * height | 0;

  this.img = (function() {
    var canvas = document.createElement('canvas'),
      context = canvas.getContext('2d');
    canvas.height = canvas.width = 10;
    context.beginPath();
    context.arc(2, 2, 2, 0, 2 * Math.PI, false);
    context.fillStyle = 'white';
    context.fill();
    context.closePath();
    return canvas;
  })();
}

inherits(Star, CanvasItem);

Star.prototype.update = function() {
  this.y += 1;
  if(this.y >= height) {
    this.y = 0;
  }
};

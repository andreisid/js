//comment
let greet = "hey";
//console.log(greet);
let nb = 0.3;
//console.log(nb + 1);

//Factory function
function createCircle(radius) {
  c = {
    radius,
    draw: function() {
      console.log("draw");
    }
  };
  return c;
}
c1 = createCircle(9);
console.log(c1);

//Constructor
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw again");
  };
}

c2 = new Circle(3);
console.log(c2);

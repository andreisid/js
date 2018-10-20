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

//clone object
c3 = Object.assign({}, c2);
console.log(c3);

c4 = { ...c3 };
console.log(c4);

//foreach
const video = {
  title: "vid1",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(tag => {
      console.log(this.title, tag);
    });
  }
};

video.showTags();

//array
sir = [1, 2, 3, 4, 5, 6, 7];
sir1 = sir.filter(n => {
  if (n % 2 == 1) return n;
});
console.log(sir1);

sir2 = sir.map(n => {
  return "<li>" + n + "</li>";
});

console.log(sir2);

sir3 = sir.map(n => "<li>" + n + "</li>");

console.log(sir3);

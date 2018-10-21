//comment
let greet = "hey";
//console.log(greet);
let nb = 0.3;
//console.log(nb + 1);

//Factory function
function createCircle(radius) {
  let c = {
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
//console.log(sir1);

sir2 = sir.map(n => {
  return "<li>" + n + "</li>";
});

//console.log(sir2);

sir3 = sir.map(n => "<li>" + n + "</li>");

//console.log(sir3);

sir4 = sir.reduce((sum, elem) => {
  return sum + elem;
}, 0);
//console.log(sir4);

const person = {
  name: "andy",
  walk() {
    console.log(this);
  }
};

//bind
person.walk();
const walk = person.walk.bind(person);
walk();

//spread
//console.log(sir);
//console.log(sir1);
//console.log(sir.concat(sir1));
//console.log([...sir1,...sir]);

//object destructoring
man = {
  name: "ion",
  age: 28,
  address: "uk"
};

const { name, age, address } = man;
console.log(name, age, address);
const { name: n } = man;
console.log(n);

//spread operator
const first = { name: "john" };
const second = { job: "writer" };

const combined = { ...first, ...second, location: "uk" };
console.log(combined);

class Pers {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walk");
  }
}

p1 = new Pers("ion");
console.log(p1);
p1.walk();

class Teacher extends Pers {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teaching ..");
  }
}

t1 = new Teacher("A", "b");
console.log(t1);

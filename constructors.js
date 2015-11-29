var Cat = function(name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement = function () {
  console.log("Everyone loves " + this.name);
}

Cat.prototype.meow = function () {
  console.log(this.name + ": " + "Meeeeeeeow");
}

var gizmo = new Cat("Gizmo", "Ned");
var jams = new Cat("Jams", "Pen");
var jeffers = new Cat("Jeffers", "Slick");

gizmo.cuteStatement();
jams.cuteStatement();
jeffers.cuteStatement();

jeffers.meow = function () {
  console.log(this.name + ": " + "meep")
};

gizmo.meow();
jams.meow();
jeffers.meow();

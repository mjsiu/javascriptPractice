// 1. Declarative style constructor
function Computer (name, company) {
  this.name = name;
  this.owner = owner;
}
// 2. Expressive style constructor
var Model = function(modelType) {
  this.modelType = modelType;
}

// Prototype Inheritance

function Animal(name, owner){
  this.name = name;
  this.owner = owner;
}

Animal.prototype.sayOwner = function() {
  console.log(this);
  console.log(this.owner);
}

function Cat(name, owner, furType){
  Animal.call(this, name, owner);

  this.furType = furType;
}

function Surrogate(){};
Surrogate.prototype = new Animal();

Cat.prototype = new Surrogate();

Cat.prototype.meow = function() {
  console.log("Meow");
}

Cat.prototype.sayFurType = function() {
  console.log("My fur type is: " + this.furType);
}

var gizzmo = new Cat("Gizzmo", "Ned", "Fuzzy");
gizzmo.meow();
gizzmo.sayOwner();
gizzmo.sayFurType();

// Exercises

Function.prototype.inherits = function (baseClass) {
  function Surrogate() {};
  Surrogate.prototype = baseClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

function MovingObject (objectType) {
};

function Ship (objectType) {
};
Ship.inherits(MovingObject);

function Asteroid () {
};
Asteroid.inherits(MovingObject);

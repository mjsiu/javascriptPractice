var Cat = function(name, age) {
  this.name = name;
  this.age = age;
};

var Dog = function(name, age) {
  this.name = name;
  this.age = age;
};

Cat.prototype.stats = function () {
  return "Name: " + name + " " + "Age: " + age;
};

Dog.prototype.woof = function () {
  console.log("Woof");
};

var jeff = new Cat(jeff, 50);
var array = [1,2,3,4];

// 1. function style
function log(cat) {
  console.log(this.age);
}

// this === global
log(jeff);

// 2. Method style

// this === array
array.join(' ');

// 3. Constructor Style

// this === created instance
var Jabby = new Cat("Jabby", 10);

// 3. Call/Apply

// this === jeff
log.apply(jeff);

// this === jeff
log.call(jeff);

// 4. Bind

// this === jeff
var bound = log.bind(jeff);
console.log(bound);
console.log(bound());

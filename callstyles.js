var Cat = function(name, age) {
  this.name = name;
  this.age = age;
};

var Dog = function(name, age) {
  this.name = name;
  this.age = age;
};

Cat.prototype.stats = function () {
  console.log("Name: " + this.name + " " + "Age: " + this.age);
};

Dog.prototype.woof = function () {
  console.log("Woof");
};

function doThreeTimes(callback) {
  for (var i = 0; i <= 2; i++) {
    callback();
  }
}

var jeff = new Cat("Jeff", 50);
var array = [1,2,3,4];

// Doesn't work, this === global
doThreeTimes(jeff.stats)

// All work, this === jeff
doThreeTimes(function () {
  jeff.stats();
});
doThreeTimes(jeff.stats.bind(jeff));
doThreeTimes(Cat.prototype.stats.bind(jeff));


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

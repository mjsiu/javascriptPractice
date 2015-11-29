function bind1(func, obj) {

  var bound = function () {
    return func.call(obj);
  }
  return bound;
}

Function.prototype.myBind = function (obj) {
  return bind1(this, obj);
}

var Cat = function(name, age) {
  this.name = name;
  this.age = age;
}

Cat.prototype.name = function () {
  console.log(this.name)
}

var gizzmo = new Cat("Gizzmo", 3);
var bound = Cat.prototype.name.myBind(gizzmo)
console.log(bound)
bound();

function sum(numbers) {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sum(1,2,3,4,5));
console.log(sum(1,2,3,4,5,6,7));

function Cat(name) {
  this.name = name;
};

Cat.prototype.says = function (sound) {
  console.log(this.name + " says " + sound + "!");
}

var markov = new Cat("Markov");
var breakfast = new Cat("Breakfast");

Function.prototype.myBind = function(obj) {
  var args1 = Array.prototype.slice.call(arguments, 1);
  var fn = this;

  return function() {
    var args2 = Array.prototype.slice.call(arguments)
    var totalArgs = args1.concat(args2);
    return fn.apply(obj, totalArgs);
  };
};

markov.says("meow");
// Markov says meow!

markov.says.myBind(breakfast, "meow")();
// Breakfast says meow!

markov.says.myBind(breakfast)("meow");
// Breakfast says meow!

var notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow");
// Breakfast says meow!

function curriedSum(numArgs) {
  var numbers = [];

  var _curriedSum = function (number) {
    numbers.push(number);

    if (numbers.length === numArgs) {
      var sum = 0;

      numbers.forEach(function(x) {
        sum += x;
      });

      return sum;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

var sum = curriedSum(4);
console.log(sum(5)(30)(20)(1));

Function.prototype.curry = function (numArgs) {
  var args = [];
  var fn = this;

  var _curry = function (args) {
    args.push(args);

    if (args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return _curry;
    }
  }
  return _curry;
}

console.log(sum.curry(1)(5));

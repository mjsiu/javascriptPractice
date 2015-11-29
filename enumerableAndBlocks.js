// Rewrite enumerable and block exercises in Javascript

Array.prototype.doubleArray = function () {
  var doubled = [];

  for (var i = 0; i < this.length; i ++) {
    doubled.push(this[i]*2);
  }

  return doubled;
};

console.log([1,2,3].doubleArray());

// == Array.prototype.forEach
Array.prototype.myEach = function (callback) {

  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }

  return this;
};

console.log([1,2,3].myEach(function (elem) { return console.log(elem)})); // [1,2,3]

// == Array.prototype.map
Array.prototype.myMap = function (callback) {
  var mapped = [];

  this.myEach(function (elem) {
      mapped.push(callback(elem))
  });
  return mapped;
};

console.log([1,2,3].myMap(function (elem) { return elem + 1 })); // [2,3,4]

// == Array.prototype.reduce
Array.prototype.myInject = function (callback, startingElement) {
  var sum = null;
  var array = [];

  if (startingElement === undefined) {
    sum = this[0];
    array = this.slice(1);
  } else {
    sum = startingElement;
    array = this;
  }

  array.myEach(function(elem) {
    sum = callback(elem, sum);
  });
  return sum;
};

console.log([1,2,3,4,5].myInject(function (elem, sum) {
  return sum + elem;
}, 0));

// == Array.prototype.filter
Array.prototype.mySelect = function (test) {
  var passedElems = [];

  this.myEach(function(elem) {
    if (test(elem) === true) {
      passedElems.push(elem);
    }
  });
  return passedElems;
};

console.log([1,2,3,4,5,6].mySelect(function(elem) {
  if ((elem % 3) === 0) {
    return true;
  }
}));

// == Array.prototype.length
Array.prototype.myArrayCount = function (){
  var count = 0;

  this.myEach(function (elem) {
    count += 1;
  });
  return count;
};

Object.prototype.myObjCount = function () {
  var count = 0;

  // why do I have to check hasOwnProperty
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      count += 1;
    }
  }
  return count;
};

// Is it ok to write it this way?
Object.prototype.myCount = function () {
  var count = 0;

  if (Array.isArray(this)) {
    return this.myArrayCount();
  } else {
    return this.myObjCount();
  }
};

console.log([1,2,3,4].myArrayCount());
console.log({"first" : "hydrogen", "second": 'helium', "third": 'lithium'}.myObjCount());
console.log(([1,2,3,4].myCount()));
console.log(({"first" : "hydrogen", "second": 'helium', "third": 'lithium'}).myCount());

// == Array.prototype.includes();
Array.prototype.include = function (number) {
  var found = false;

  this.myEach(function (elem) {
    if (elem === number) {
      console.log("hitting")
      found = true;
    }
  });
  return found;
};

console.log([1,2,3].include(3));
console.log([1,2,3].include(5));

Array.prototype.any = function (test) {
  var found = false;

  this.myEach(function (elem) {
      if (test(elem) === true) {
        found = true;
      }
  });

  return found;
};

console.log([1,2,3,4].any(function (elem) { return (elem % 2) === 0 }));
console.log([2,4,6,8].any(function (elem) { return (elem % 2) !== 0 }));

// Rewrite iteration exercises in Javascript

function factors(number) {
  var factors = [];

  for (var i = 1; i <= number; i++){
    if ((number % i) === 0) {
      console.log(i);
      factors.push(i);
    }
  }
  return factors;
}

console.log(factors(10)); // [1,2,5,10]

function bubbleSort(array) {
  var sorted = false;

  while (sorted === false) {
    sorted = true;
    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sorted = false;
      }
    }
  }
  return array;
}

console.log(bubbleSort([5,4,3,2,1]));

function subStrings(str) {
  var subs = [];

  for (var i = 0; i < str.length; i++) {
    for (var j = (i + 1); j < str.length + 1; j++) {
      subs.push(str.slice(i,j));
    }
  }
  return subs;
}

console.log(subStrings("cat"));

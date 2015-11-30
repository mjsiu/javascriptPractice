function quickSort (array) {
  if (array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var smaller = [];
  var bigger = [];

  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      smaller.push(array[i]);
    } else {
      bigger.push(array[i]);
    }
  };

  return quickSort(smaller).concat(pivot, quickSort(bigger));
}

console.log(quickSort([4,3,1,5,2]));

function mergeSort(array, callback) {
  if (array.length < 2) {
    return array;
  }

  var cb = callback;
  if (cb === undefined) {
      cb = function(num1, num2) {
      return num2 >= num1;
    };
  }

  var half = Math.floor(array.length/2);
  var left = mergeSort(array.slice(0,half), cb);
  var right = mergeSort(array.slice(half), cb);

  return mergeSortHelper(left, right, cb);
}

function mergeSortHelper(left, right, callback) {
  var sorted = [];


  while (left.length > 0 && right.length > 0) {
    if (callback(left[0], right[0])) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return sorted.concat(left, right);
}

console.log(mergeSort([4,3,1,5,2], function(num1, num2) {
  return num2 > num1;
}));
console.log(mergeSort([4,3,1,5,2], function(num1, num2) {
  return num2 < num1;
}));

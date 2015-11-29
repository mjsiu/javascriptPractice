function iterativeRange(startNum, endNum) {
  var nums = [];

  for (var i = startNum; i < endNum; i++) {
    nums.push(i);
  }
  return nums;
}

console.log(recursiveRange(1,10));

function recursiveRange(startNum, endNum) {
  var nums = [];

  if (startNum === endNum) {
    return [];
  } else {
    nums.push(startNum);
    return nums.concat(recursiveRange(startNum + 1, endNum));
  }
}

console.log(recursiveRange(1,10));

function iterativeSum(numbers) {
  var sum = 0;

  numbers.forEach(function (number) {
    sum += number;
  })
  return sum;
}

console.log(iterativeSum([1,2,3,4,5]));

function recursiveSum(numbers) {

  if (numbers.length === 0) {
    return 0;
  } else {
    sum = numbers[numbers.length-1];
    return sum + recursiveSum(numbers.slice(0, numbers.length-1));
  }
}

console.log(recursiveSum([1,2,3,4,5]));

function exponents1(base, exponent) {

  if (exponent === 0) {
    return 1;
  } else {
    return base * exponents1(base, exponent-1);
  }
}

console.log(exponents1(2,5));

function exponents2(base, exponents) {

  if (exponents === 0) {
    return 1;
  } else if (exponents ===  1) {
    return base;
  } else if (exponents % 2 === 0) {
    var square = exponents2(base, exponents/2);
    return square * square;
  } else {
    var square = exponents2(base, ((exponents-1)/2));
    return base * square * square;
  }
}

console.log(exponents2(2,5));

function fibonacci(num) {

  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else if (num === 2) {
    return 1;
  } else {
    return fibonacci(num-1) + fibonacci(num-2)
  }
}

console.log(fibonacci(6));

function fibonacciArray(amount) {

  if (amount === 0) {
    return [];
  } else if (amount === 1) {
    return [1];
  } else if (amount === 2) {
    return [1,1];
  } else {
    var previousFib = fibonacciArray(amount-1)

    previousFib.push(previousFib[previousFib.length-1] + previousFib[previousFib.length-2])
    return previousFib
  }
}

console.log(fibonacciArray(5));

function binarySearch(array, target) {
  var half = Math.floor(array.length / 2);

  if (array.length === 0) {
    return -1;
  } else if (array[half] === target) {
    return half;
  } else if (array[half] > target) {
    var left = array.slice(0,half);

    return binarySearch(left, target);
  } else {
    var right = array.slice(half + 1);
    var sub = binarySearch(right, target);

    return (sub === -1) ? -1 : sub + half + 1
  }
}

console.log(binarySearch([1,2,3,4,5], 5));

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {

  var half = Math.floor(array.length/2);

  var left = array.slice(0,half);
  var leftSorted = mergeSort(left);

  var right = array.slice(half);
  var rightSorted = mergeSort(right);

  return mergeHelper(leftSorted, rightSorted);
  }
}

function mergeHelper(right,left) {
  var sorted = [];

  while (right.length > 0 && left.length > 0) {
    if (right[0] > left[0]) {
      sorted.push(left.shift());
    } else if (right[0] < left[0]){
      sorted.push(right.shift());
    } else {
      sorted.push(left.shift());
    }
  }
  return sorted.concat(left, right);
}

console.log(mergeSort([5,1,2,3,4]));

function subSets(array) {
  if (array.length === 0) {
    return [[]];
  }

  var first = array[0];
  var subs = subSets(array.slice(1));

  var newSubs = subs.map(function (subs){
    return [first].concat(subs);
  });

  return subs.concat(newSubs);
}

console.log(subSets([1, 3, 5]));

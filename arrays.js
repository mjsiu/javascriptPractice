// Rewrite Array Excercises in Javascript

Array.prototype.myUnique = function () {
  var uniques = [];

  for (var i = 0; i < this.length; i++) {
      if (uniques.indexOf(this[i]) === -1)
      uniques.push(this[i]);
  }
  return uniques
};

console.log([1,2,3,4,4,5,6,6,6].myUnique()); // [1,2,3,4,5,6]

Array.prototype.twoSum = function () {
  var sumPairs = [];

  for (var i = 0; i < this.length; i++){
    for (var j = (i + 1); j < this.length; j++) {
      if ((this[i] + this[j]) === 0) {
        sumPairs.push([i,j]);
      }
    }
  }
  return sumPairs;
};

console.log([-1, 0, 2, -2, 1].twoSum()); // [[0, 4], [2, 3]]

Array.prototype.myTranspose = function () {
  var transposed = [];

  for (var i = 0; i < this.length; i++) {
    transposed.push([]);
    for (var j = 0; j <this.length; j++) {
      transposed[i][j] = this[j][i];
    }
  }
  return transposed;
}

console.log([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ].myTranspose());
// [[0, 3, 6],
// [1, 4, 7],
// [2, 5, 8]]

function stockPicker(array) {
  var mostProfitable = [],
      highestProfit = 0,
      currentProfit = 0;

  for (var i = 0; i < array.length; i++) {
    for (var j = (i + 1); j < array.length; j++) {
      currentProfit = (array[j] - array[i]);
        if (currentProfit > highestProfit) {
          highestProfit = currentProfit;
          mostProfitable = [i, j];
          currentProfit = 0;
        } else {
          currentProfit = 0;
        }
    }
  }
  return mostProfitable;
}

console.log(stockPicker([20,50,10,100,5])); // [2,3]

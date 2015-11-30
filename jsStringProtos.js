String.prototype.myCharAt = function (idx) {
  var split = this.split('');
  return split[idx];
}

String.prototype.myConcat = function (string2) {
  var string1 = this;

  return string1 + string2;
}

String.prototype.myIncludes = function (substring) {
  var string = this;
  var found = false;

  for (var i = 0; i < string.length; i++) {
    for (var j = (i + 1); j < string.length + 1; j++) {
      if (string.slice(i, j) === substring) {
        found = true;
      }
    }
  }
  return found;
}

console.log("HATCAT".myIncludes("CAT"));

String.prototype.myIndexOf = function (elem) {
  var string = this;
  var repeat = false;
  var foundIdx = -1;

  for (var i = 0; i < string.length; i++) {
    if (string[i] === elem) {
      if (repeat === false) {
      foundIdx = i;
      repeat = true;
      }
    }
  }
  return foundIdx;
}

console.log("HATCAT".myIndexOf("T"));

String.prototype.mySlice = function (start, end) {
  var last = end;
  var string = this;
  var split = '';

  if (last === undefined) {
    last =  this.length;
  }

  for (var i = start; i < last; i++) {
    split += string[i];
  }

  return split;
}

console.log("Christmas".mySlice(2,5));

String.prototype.mySplit = function(seperator) {
  var sep = seperator;
  var split = [];
  var string = this;

  if (sep === undefined) {
    sep = '';
  }

  if (sep === '') {
    for (var i = 0; i < string.length; i++) {
      split.push(string[i]);
    }
  } else {
    var subWord = '';
    for (var i = 0; i < string.length; i++) {
      if (string[i] === sep || string[i] === (string[string.length-1])) {
        split.push(subWord);
        subWord = '';
      } else {
        subWord += string[i];
      }
    }
  }
  return split;
}

console.log("Abc def".mySplit(" "));
console.log("Abc def".mySplit(''));
console.log("Abc def".mySplit());

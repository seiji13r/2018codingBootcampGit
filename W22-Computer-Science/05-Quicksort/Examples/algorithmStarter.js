// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Selection Sort
// ================================================

function quickSort(items) {
  if (items.length <= 1) {
    return items;
  }
  let pivot = items[items.length - 1];
  let leftSide = [];
  let rightSide = [];
  for (let i = 0; i < items.length - 1; i++) {
    if (items[i] < pivot) {
      leftSide.push(items[i]);
    } else {
      rightSide.push(items[i]);
    }
  }
  // return [].concat(quickSort(leftSide), [pivot], quickSort(rightSide));
  return quickSort(leftSide).concat(pivot, quickSort(rightSide));
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(quickSort(array).join(" "));

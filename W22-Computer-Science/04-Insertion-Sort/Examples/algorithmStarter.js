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

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

// for i ← 1 to length(A) - 1
//    j ← i
//    while j > 0 and A[j-1] > A[j]
//        swap A[j] and A[j-1]
//        j ← j - 1
//    end while
// end for

// ================================================
// SOLUTION - Insertion Sort
// ================================================

function insertionSort(array) {
  var j;
  for(var i=1;i<array.length;i++){
    j=i;
    while(j>0&&array[j-1]>array[j]){
      swap(array,j,j-1);
      j--;
    }
  }
  return array;
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));

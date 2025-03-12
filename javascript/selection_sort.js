function selectionSort(arr) {
  return arr.sort((x, y) => x - y)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("Expecting: [-21, 21, 23, 27, 222]");
  console.log("=>", selectionSort([21, 23, 222, -21, 27]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}



module.exports = selectionSort;

// Please add your pseudocode to this file
/* Given an array of numbers, 
sort through the array
place values within the array numerically from lowest to highest
*/

// And a written explanation of your solution
/*
Javascript sort method is called on array, comparing element x with element y, subtracting y from x
When the returning value is a negative, x goes before y as it is smaller.
If the returning value is 0, x and y are considered equal and exist side by side.
If the returning value is positive, x goes after y as it is larger.
The array of numbers arranged from lowest to highest is returned.
*/
// Example 1: flat() removes one level of nesting
const arr1 = [1, 2, [3, 4], 5];

console.log(arr1.flat());
// Output: [1, 2, 3, 4, 5]


// Example 2: Two nested arrays
const arr2 = [[1, 2], [3, 4]];

console.log(arr2.flat(1));
// Output: [1, 2, 3, 4]


// Example 3: Default flat() removes only one level
const arr3 = [1, [2, [3, 4]]];

console.log(arr3.flat());
// Output: [1, 2, [3, 4]]


// Example 4: flat(2) removes two levels
const arr4 = [1, [2, [3, 4]]];

console.log(arr4.flat(2));
// Output: [1, 2, 3, 4]


// Example 5: flat(3) removes three levels
const arr5 = [1, [2, [3, [4]]]];

console.log(arr5.flat(3));
// Output: [1, 2, 3, 4]


// Example 6: flat(Infinity) removes all levels
const arr6 = [1, [2, [3, [4, [5]]]]];

console.log(arr6.flat(Infinity) + " passing infinity value inside flat method");
// Output: [1, 2, 3, 4, 5]


// Example 7: flat() does NOT change the original array
const arr7 = [1, [2, 3]];

const result = arr7.flat();

console.log(arr7);
// Output: [1, [2, 3]]

console.log(result);
// Output: [1, 2, 3]
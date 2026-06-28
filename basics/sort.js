const nums = [10, 20, 1, 3];
// console.log(nums.sort() + "without helper function")
const sortOrder = nums.sort((a,b)=>a -b);
console.log(sortOrder);

// Initial array:
// [10, 20, 1, 3]

// Step 1:
// Compare 10 and 20
// 10 - 20 = -10
// Result is negative → Keep order
// Array: [10, 20, 1, 3]

// Step 2:
// Compare 20 and 1
// 20 - 1 = 19
// Result is positive → Swap
// Array: [10, 1, 20, 3]

// Step 3:
// Compare 10 and 1
// 10 - 1 = 9
// Result is positive → Swap
// Array: [1, 10, 20, 3]

// Step 4:
// Compare 20 and 3
// 20 - 3 = 17
// Result is positive → Swap
// Array: [1, 10, 3, 20]

// Step 5:
// Compare 10 and 3
// 10 - 3 = 7
// Result is positive → Swap
// Array: [1, 3, 10, 20]

// Sorting complete!

// Final array:
// [1, 3, 10, 20]
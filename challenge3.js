/*

Nums and targets challenge
Author: Vianney Kimuri 


Assumptions: 

- Each input would have exactly one solution
- The same element cannot be used twice

*/

function twoSum(nums, target) {

    // Loop through the array
    // For each element, loop through through the array again
    // checking to see whether the first number, added to the next number will yield the target
    // get the indices of the first and second number
    for (let i = 0; i < nums.length; i++ ) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] !== nums[i] && (nums[i] + nums[j]) == target) {
                return `
                Input: nums = [${nums}], target = ${target},
                Output: [${i}, ${j}],
                Explanation : Because nums[${i}] + nums[${j}] = ${target}, we return [${i}, ${j}]`
            }

        }
    }

    return "Error: No number found in array to make the sum"
}

console.log(twoSum([1,2,3,4], 5))
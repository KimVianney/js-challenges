/*

Check for integers that appear twice or more in array
Author: Vianney Kimuri

*/

function twiceMore(nums) {
    // Initialize object to hold numbers and their frequencies
    let objTracker = {}

    // Loop through array, check if number is already in the 
    // object we created, if not, add it to object with the number
    // of times it appears
    for (let i = 0; i < nums.length; i++) {
        digit = nums[i];
        if (!(digit in objTracker)) {
            objTracker[digit] = 1;
        } else {
            objTracker[digit] += 1;
        }
    }

    // Check all key-value pairs in object
    // if any pair, has a value which is 2 or more
    // return its key, as an integer
    for (const [key, value] of Object.entries(objTracker)){
        if (value >= 2) {
            return true
        }
    }

    return false;
}

console.log(twiceMore([1,2,3,4]))
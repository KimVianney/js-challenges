/*

Sort Array into respective datatypes
Author: Vianney Kimuri

*/

function sortArray(arr) {
    let sorted = {
        evens: [],
        odds: [],
        chars: []
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === 'number') {
            if (arr[i] % 2 === 0){
                sorted.evens.push(arr[i]);
            } else {
                sorted.odds.push(arr[i]);
            }
        } else if (typeof(arr[i] === 'string')) {
            sorted.chars.push(arr[i])
        }
    }

    return sorted
}

console.log(sortArray([3.0, 'a', 7, 'x', '20', 'd', 4, 'f', 8]))
console.log(typeof(4.0))
console.log(typeof('f'))
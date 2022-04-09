//Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

// [4,2,1,3,5]
// [1,4,2,3,5]

function minToFront(arr) {
    var min = arr[0];
    newArray = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    for (let i = 1; i < arr.length; i++){
        
    }

}
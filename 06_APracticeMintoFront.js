//Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function minToFront(arr) {
    var min = arr[0];
    var minPosition = 0;
    
    for (let i = 1; i < arr.length; i++){
        
        if (arr[i] < min) {            
            minPosition = i;
            min = arr[minPosition];   
        }
    }

    for (let j = minPosition; j > 0; j--) {

        var temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
    }
    return arr;
}
// INPUT [4,2,1,3,5]
// OUTPUT [1,4,2,3,5]
var Solution = minToFront([4, 2, 1, 3, 5]);
console.log("Solution is ", Solution);

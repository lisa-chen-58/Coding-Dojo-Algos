// REVERSE
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().copy

function reverse(arr) {
    
    for (var i = 0; i < arr.length / 2; i++) {

        // i = 3, temp = 3
        var temp = arr[i];
        // i = 3, arr = [6,5,4,3,2,1] << length must be / 2 to work
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;

    }
    return arr;
}

// INPUT [1,2,3,4,5]
// OUTPUT [5,4,3,2,1]
var oddReverseSolution = reverse([1, 2, 3, 4, 5]);
var evenReverseSolution = reverse([1, 2, 3, 4, 5, 6]);
console.log("Reverse Solution odd:", oddReverseSolution);
console.log("Reverse Solution even:", evenReverseSolution);


// ROTATE
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.copy

function rotateArr(arr, shiftBy) {
    
    for (var i = 0; i < shiftBy; i++){
        var temp = arr[arr.length - 1];
        
        for (var j = shiftBy; j >= 0; j--){
            // if the length is less than the length of the original array
                arr[j + shiftBy] = arr[j];
            
        }
        arr[0] = temp;
        return arr;
    }

}

// INPUT [1,2,3,4], 1
// OUTPUT [4,1,2,3]
var rotateSolution = rotateArr([1, 2, 3, 4], 2)
console.log("Rotate Solution:", rotateSolution);

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.copy
// Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].



// Arrays To Do 1


// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushFront(aArray, aValue) {
    aNewArray = [];

    for (let i = 0; i < aArray.length; i++){
        aNewArray[i + 1] = aArray[i];
    }
    aNewArray[0] = aValue;
    return aNewArray;
}
aSolution=pushFront([1, 2, 3], 5);
console.log("Push Front Solution: ", aSolution); 


// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function popFront(bArray) {
    bNewArray = [];
    for (let i = 1; i < bArray.length; i++){
        bNewArray[i-1] = bArray[i];
    }
    return bNewArray
}
bSolution=popFront([1, 2, 3]);
console.log("Pop Front Solution: ", bSolution);


// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(cArray, index, cValue) {
    cArray[index] = cValue;
    return cArray;
}

cSolution=insertAt([1, 2, 3],2,7);
console.log("Insert At Solution: ", cSolution);

// Remove At (Bonus Challenge)
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(dArray, index) {
    newValue = dArray[index];
    newArray = [];
    for (let i = 0; i < dArray.length-1; i++) {

        if (i >= index) {
            newArray[i] = dArray[i + 1];
        }
        else {
            newArray[i] = dArray[i];
        }
    }
    return newArray;
}

dSolution=removeAt([1, 2, 3,'a','b','c'],4);
console.log("Remove At Solution: ", dSolution);

// Swap Pairs (Bonus Challenge)
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.


function swapPairs(eArray) {
    newArray = []
    for (let i = 0; i < eArray.length; i++) {
            if (i % 2 == 0) {
                if (i == eArray.length - 1) {
                    newArray[i] = eArray[i];
                }
                else {
                    newArray[i + 1] = eArray[i];
                }
            }
            else if (i % 2 == 1) {
                newArray[i - 1] = eArray[i];
            }
        }
        return newArray;
    
    }
eSolution=swapPairs(["Brendan",true,42]);
console.log("Swap Pair Solution: ", eSolution);



// Remove Duplicates (Bonus Challenge)
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

function removeDuplicates(fArray) {
    for (let i = 0; i < fArray.length; i++) {
        if (fArray[i] == fArray[i + 1]) {
            a = removeAt(fArray, i);
        }
    }
    return a;
}


fSolution = removeDuplicates(['a', 'b', 'c', 'c', 'd']);
console.log("Remove Duplicates Solution: ", fSolution);
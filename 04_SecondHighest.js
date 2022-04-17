


function twoHigh(arr){
    let highest = arr[0];
    let secondHighest = arr[0];
    //get the second highest number in an array. no googling. no built ins. array must have at least 2 nums.
    for(let i = 0; i < arr.length; i ++){
        if (arr[i] > highest) {
            secondHighest = highest;
            highest = arr[i]; //set our highest value
            // console.log(highest);
        }
        // if(arr[i] < highest && arr[i] !== 0){
        else if (arr[i]<highest && arr[i] >secondHighest){
            secondHighest = arr[i]; // set our second highest value?
        }
    }
    return secondHighest;
}
var solution = twoHigh([-5, -2, -3, -3, -4, 8, 4, -2]);
console.log(solution);
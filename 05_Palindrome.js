// Create a function that, given a string, will determine whether the string is a palindrome. Return a boolean.


// TEAM TEST
// Palindrome: "racecar"
// Not Palindrome: "cricket", "RaCecAr"

// const pal = (arg1) => {
//     let reversedString = [];
//     let argPos = arg1.length;
//     for (let i = 0; i < arg1.length; i++){
//         reversedString += arg1[argPos - 1];
//         argPos -= 1;
//     }
//     console.log(reversedString);
//     if(reversedString == arg1){
//         console.log('is a palindrome')
//     } else {
//         console.log('not a palindrome')
//     }
// }

// pal("noon");


function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}
palindrome("noon");
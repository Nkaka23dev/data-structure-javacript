// function findIfStringExist(originalString, search) {
//     return originalString.indexOf(search) !== -1;
// }

// if (findIfStringExist("Hello Eric Nkaka, how is everything going!", "Helloheh")) {
//     console.log("Happy, this strin exist in the provided string")
// } else {
//     console.log(("It does not exist"))
// }

const myString = "He's my king from this day until his last day";
let seach = "l"
const countOccuranceOfCharacters = (originalString2, search) => {
    let count = 0
    let position = originalString2.indexOf(search);
    while (position !== -1) {
        count++;
        position = originalString2.indexOf(search, position + 1)
    }
    return count
}

console.log(countOccuranceOfCharacters(myString, seach))
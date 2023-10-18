// const myVariable = "dog"
// console.log(myVariable.charAt(0), myVariable.charCodeAt(0))

// const myVariable = "Hello Nkaka"
// console.log(myVariable.substring(4)) 


var a = 'ab'
var b = 'add'

// when comparing two strings it compare to the shortest string for example in case of a = 'ab' and b = 'add' it will only compare to 'ab' and 'ad. Also it compare their charcode .


// console.log("Red drogon".indexOf('Red'))
// console.log('Nkaka Hello Nkaka Eric'.indexOf('Nkaka', 13))
// console.log("He's my king from this day until his last day".indexOf('a', 25))


const stringFinder = (originalString, search) => {
    return originalString.indexOf(search) !== -1
}

console.log(stringFinder("Hello Nkaka eric", "Hellod"))
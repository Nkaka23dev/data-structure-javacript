let search = /apple/g;
let text = "I love apples, apple pie, and apple juice.";

//These indexOf and search work the same
// console.log(text.indexOf('apple'))
// console.log(text.search(search))

console.log(search.test(text))



// console.log(text.match(search))

// var search = /apple/g;
// var text = "I love apples, apple pie, and apple juice.";
// var match;
// while ((match = search.exec(text)) !== null) {
//     console.log(match[0]); // Output: "apple", "apple", "apple" (each iteration finds the next match)
// }

// console.log(search.exec(text))
// console.log(text.match(search))
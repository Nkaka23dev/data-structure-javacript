function myFunc() {
    let counter = 1;
    alert("You completed only " + counter + " Exercises")
    counter = checkCount(counter)
    alert("You completed only " + counter + " Exercises")
}

function checkCount(item) {
    console.log("This is a nested fucntion being called");
    return item + 6;
} 

var d = document;
console.log('title = ' +d.title);
console.log('url = ' +d.URL);
console.log('referrer = ' +d.referrer);
console.log('lastModified = ' +d.lastModified);

//logs either BackCompat (Quirks Mode) or CSS1Compat (Strict Mode)
console.log('compatibility mode = ' +d.compatMode);
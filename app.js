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


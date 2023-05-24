// const funcCreator = () => {
//     let count = 0;
//     const add3 = (num1) => {
//         let result = num1 + 3;
//         return result;
//     }
//     return add3
// } 


// const generateFunc = funcCreator();

// console.log(generateFunc()) 

const inner = () => {
    let counter = 0;
    const incerement = () => {
        return counter += 1;
    }
    return incerement;
}

const toBerun = inner();

console.log(toBerun())
console.log(toBerun())
console.log(toBerun())

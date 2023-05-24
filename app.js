const reduce2 = (arr, buildUp, acc) => {
    for (let ar of  arr) {
        acc = buildUp(acc, ar);
    }
    return acc
}
const add = (a, b) => {
    return a + b;
}
const sum = reduce2([2, 3, 4,5,6,7,8,8], add, 0);
console.log(sum)
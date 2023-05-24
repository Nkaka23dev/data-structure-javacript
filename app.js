const square = (x) => {
    return x * x;
}

const divide = (xc) => {
    return x / 2;
}

const mapReduce = (arr, callback) => {
    let new_arr = [];
    for (let ar of arr) {
        new_arr.push(callback(ar))
    }
    return new_arr;
}
console.log(mapReduce([5, 6, 7], square));
console.log(mapReduce([5, 6, 7], divide))
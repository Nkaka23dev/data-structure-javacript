// const arr = new Float32Array([3.544,4,5,2,5,2]);

// console.log(arr) 


const buffer = new ArrayBuffer(8)

const arr = new Float32Array(buffer);
arr[0] = 937
arr[1] = 9
arr[2] = 7
arr[3] = 3
console.log(arr)
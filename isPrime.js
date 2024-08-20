//A number is prime when it is divisible by itself  and 1 only

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

let cachedPrime = {};

function isPrimeCached(n) {
  if (n in cachedPrime) {
    return cachedPrime[n];
  }
  if (n <= 1) {
    return (cachedPrime[n] = false);
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return (cachedPrime[n] = false);
    }
  }
  return (cachedPrime[n] = true);
}
console.log(isPrimeCached(2));
console.log(isPrimeCached(2));
console.log(cachedPrime);
// function isPrime2(n) {
//   //check if number is not divisible by by numbers from 2 to square root of n
//   let arr = [];
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime2(2));
 


.data
list:
  .word -3,4,6,0,5,87,9
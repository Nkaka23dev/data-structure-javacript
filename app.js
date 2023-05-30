
// Approach one efor creating object(using object literals)
const user1 = {
    name: "Nkaka",
    score: 4,
    increment: () => this.score += 1
}
user1.increment();
console.log(user1.score) 


// Approach two of creating object(Object.create fuction)
const user3  = Object.create(null);

user3.name = "Nkaka Eric";
user3.age = 56 
console.log(user3); 


// Approach three is similar to the above and is called object dot notation, define empty object and assign values 


// Approach four of creating object(with function)
const createObjects = (name, score) => {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = () => newUser.score += 1;
    newUser.decrement = () => newUser.score -= 1;
    return newUser;
    return newUser;
}

const userA = createObjects("Jame", 65);
const userB = createObjects("Eric Nkaka", 87);

console.log(userA.increment())
console.log("User B is", userB.increment()) 

/**
 Creating of object like obove is not an efficient way of creating object, because increment and decrement functions are repeated whenever we create a new user, which means if we have 1000 users we will have 2000 copy of decrement and increment. this problem is overcomed by use prototype chain, we create an object that stores all functions and each created user can have access on it.
 * **/



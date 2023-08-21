function userCreator(name, score) {
    const newUser = Object.create(userFunctions)
    newUser.name = name
    newUser.score = score
    return newUser
}

const userFunctions = {
    sayName: function () {
        console.log("Hello, I am " + this.name)
    },
    increment: function () {
        this.score += 3
    }
}

const user1 = userCreator("nkaka", 5);
user1.sayName()
user1.increment()
console.log("From The first factory function", user1.score)

function paidUserCreator(name, score, accountBalance) {
    const newPaidUser = userCreator(name, score)
    Object.setPrototypeOf(newPaidUser, paidUserFunctions)
    newPaidUser.accountBalance = accountBalance
    return newPaidUser
}

const paidUserFunctions = {
    incrementAccountBalance: function () {
        this.accountBalance += 600
    }
}

Object.setPrototypeOf(paidUserFunctions, userFunctions);

console.log("===========================================================")
console.log("HERE IS THE CHILD FUNCTION INHERIETED FROM THE FIRST ONE")
console.log("===========================================================")

const paidUser = paidUserCreator("Alice", 44, 1);
paidUser.incrementAccountBalance();
paidUser.increment();

console.log(paidUser.score)
paidUser.sayName()
console.log(paidUser.accountBalance);


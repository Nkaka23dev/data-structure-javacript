function CreateUser(name, score) {
    const newUser = Object.create(userFunctions)
    newUser.name = name;
    newUser.score = score
    return newUser
}

const userFunctions = {
    sayName: function () {
        console.log("Hello " + this.name + " how are you doing.")
    },
    increment: function () {
        this.score += 1
    }
}

const user = CreateUser("Eric Nkaka", 5);

// user.sayName()
// user.increment()
// console.log(user.score)

function CreatePaidUser(name, score, accountBalance) {
    const user = CreateUser(name, score)
    Object.setPrototypeOf(user, paidUserFunctions)
    user.accountBalance = accountBalance
    return user
}

const paidUserFunctions = {
    incrementBalance: function () {
        this.accountBalance += 3
    }
}
Object.setPrototypeOf(paidUserFunctions, userFunctions);
const painUser = CreatePaidUser("James", 7, 70);

painUser.sayName()
painUser.increment()
console.log(painUser.score)
painUser.incrementBalance();

console.log(painUser.accountBalance)





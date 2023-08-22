function createUser(name, score) {
    const newUser = Object.create(useFunctions);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const useFunctions = {
    sayName: function () {
        console.log("Hello " + this.name + ", How are you doing ")
    },
    increment: function () {
        this.score += 5;
    }
}

const user1 = createUser("Nkaka Eric", 6);

// user1.sayName()
// user1.increment()
// console.log(user1.score) 

function CreatepaidUser(paidName, paidScore, accountBalance) {
    const newPaidUser = createUser(paidName, paidScore);
    Object.setPrototypeOf(newPaidUser, paidUserFunction);
    newPaidUser.accountBalance = accountBalance;
    return newPaidUser;
}

const paidUserFunction = {
    increaseAccuntBalance: function () {
        this.accountBalance += 1;
    }
}

Object.setPrototypeOf(paidUserFunction, useFunctions)

const paidUser = CreatepaidUser("Munyana Christella", 7, 100);

paidUser.increaseAccuntBalance();
paidUser.sayName();
console.log(paidUser.accountBalance)




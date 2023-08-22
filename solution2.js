function createUser(name, score) {
    this.name = name
    this.score = score
}

createUser.prototype.sayName = function () {
    console.log("Hello " + this.name + " How are you doing")
}
createUser.prototype.increment = function () {
    this.score += 5
}

const user1 = new createUser("Eric Nkaka", 6);

user1.sayName();
user1.increment()
console.log(user1.score);


function createPaidUser(paidName, paidScore, accountBalance) {
    createUser.call(this, paidName, paidScore);
    this.accountBalance = accountBalance;
}

createPaidUser.prototype = Object.create(createUser.prototype);

createPaidUser.prototype.incrementAccountBalance = function () {
    this.accountBalance -= 4;
}

const paiUser1 = new createPaidUser("Munyana", 6, 4);
paiUser1.incrementAccountBalance();

console.log(paiUser1.accountBalance)
paiUser1.sayName()


console.log(Function.call)
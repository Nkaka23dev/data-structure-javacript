function CreateUser(name, score) {
    this.name = name;
    this.score = score;
}

CreateUser.prototype.sayName = function () {
    console.log(`Hello ${this.name}, I hope you are good.`)
}

CreateUser.prototype.increment = function () {
    this.score += 4;
}


const user = new CreateUser("Nkaka", 7);

user.increment()

// console.log(user.score)

function CreatePaidUser(name, score, accountBalance) {
    CreateUser.call(this, name, score)
    this.accountBalance = accountBalance
}

CreatePaidUser.prototype = Object.create(CreateUser.prototype);



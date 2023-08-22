class UserCreator {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    sayName() {
        console.log(`Hello ${this.name} How are you doing`)
        return this

    }

    increment() {
        this.score += 12;
        return this
    }
}


const user1 = new UserCreator("Eric Nkaka", 5);
// user1.sayName();
// user1.increment();
// console.log(user1.score);


class CreatepaidUser extends UserCreator {
    constructor(paidName, paidScore, accoutBalance) {
        super(paidName, paidScore);
        this.accoutBalance = accoutBalance;
    }
    incrementAccountBalance() {
        this.accoutBalance += 2;
    }
}

user1.s


const paid = new CreatepaidUser("Munyana christella", 65, 7);

paid.sayName()
paid.incrementAccountBalance()
console.log(paid.accoutBalance)

console.log("dgffd", typeof user1)
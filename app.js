function UserCreator(name, score) {
    this.name = name;
    this.score = score;
};

UserCreator.prototype.increment = function () {
    const add = () => {
        this.score++;
    }
    return add()
}

UserCreator.prototype.login = function () {
    console.log("Login")
}

const user1 = new UserCreator("Nkaka Eric", 10);

console.log(user1.increment())



// BELOW IS THE SCOND WAY OF CREATING AN OBJECT

// function userCreator(name, score) {
//     const newUser = Object.create(createUserObj);
//     newUser.name = name;
//     newUser.score = score;
//     return newUser
// };

// const createUserObj = {
//     incerement: function () {
//         return this.score += 1;
//     },
//     login: function () {
//         console.log("Hello Logged In ")
//     }
// }

// const user1 = userCreator("Nkaka Eric", 12);

// console.log(user1.incerement())
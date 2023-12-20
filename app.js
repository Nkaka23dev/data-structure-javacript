// function Employee() {
//   let name = "Nkaka";
//   let salary = "35000";
//   this.name = function () {
//     console.log(name);
//   };
// }

// const worker = new Employee();

// worker.name();

function Member(username) {
  if (!new.target) {
    throw new Error("Can't call this function, unless you use new keyword");
  }
  this.name = username;
}

let user1 = new Member("Nkaka");

const isEquivalent = (obj1, obj2) => {
  const obj1Props = Object.getOwnPropertyNames(obj1);
  const obj2Props = Object.getOwnPropertyNames(obj2);

  if (obj1Props.length !== obj2Props.length) {
    console.log("False");
    return false;
  }

  for (let i = 0; i < obj1Props.length; i++) {
    let propName = obj1Props[i];
    if (obj1[propName] !== obj2[propName]) {
      console.log("False");
      return false;
    }
  }
  console.log("True");
  return;
};

function add() {
  console.error("Hello");
}

isEquivalent(
  { name: "eric", age: 23, prop: function () {} },
  { name: "eric", age: 23, prop: function () {} }
);

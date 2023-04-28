const add = (num1, num2) => {
    return num1 + num2
}
const mult = (num1, num2) => {
    return num1 * num2
}
const division = (num1, num2) => {
    return num1 / num2
}
const substraction = (num1, num2) => {
    return num1 - num2
}
const operators = ["+", "-", "/", "*"];

const operator = operators[Math.floor(Math.random() * operators.length)];

// console.log(operator)

switch (operator) {
    case "+":
        console.log("Numbers Added: ",add(8,8))
        break
    case "*":
        console.log("Multiplication: ",mult(8,8))
        break
    case "/":
       console.log("Division: ",division(8,8))
        break
    case "-":
        console.log("Substraction: ",substraction(8,8))
        break
    default:
        console.log("Operator does not exist")
}
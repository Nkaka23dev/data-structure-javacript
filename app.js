const numbers = [{
    names: "eric",
    age: 4,
},
{
    names: "Nkaka",
    age: 3,
},
{
    names: "John",
    age: 2,
}
]

const new_arr = numbers.map((value, index, arr) => {
    return value.names +'  '+ value.age
})

console.log(new_arr)


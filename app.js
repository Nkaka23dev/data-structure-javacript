const reverseString = (str) => {
    if (str.length === 0) {
        return ""
    }
    return reverseString(str.substring(1)) + str.charAt(0)
}
console.log(reverseString("Everyone Is Happy Where He is!"))

/**
reversTring("") + "a",  =>                "a"
reversTring("a") + "k",   =>              "a" + "K"
reversTring("ka") + "a",   =>             "a" + "K" + "a"
reversTring("aka") + "k",   =>            "a" + "K" + "a" + "K"
reversTring("kaka") + "N",   =>           "a" + "K" + "a" + "K" + "N"

akakn

 * **/
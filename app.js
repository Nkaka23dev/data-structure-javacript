const reverseString = (input) => {
 if(input === ""){
  return ""
 } 
 return reverseString(input.substring(1)) +  input.charAt(0)
}

/****
 * reversString(ello) + H
 * reversString(llo) + eH
 * reversString(lo) + leH
 * reversString(o) + lleH
 *  + olleH
 *olleH
 * 
 * 
 */
console.log(reverseString("Hello"))

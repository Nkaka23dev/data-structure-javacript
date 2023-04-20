
/*
1) maximum number to be passed is 359999  seconds
2) I need to return them in (HH:MM:SS)
359999 seconds  =  359999/60  = 
359999%60 ===> 59 seconds  and 5999 minutes
5999%60 ===>    59 minutes and   99 hours

*/
// console.log(359999 % 60)
// console.log(Math.floor(359999 / 60))

const HumanreadableFormat = (seconds) => {
    if (seconds <= 359999) {
        let sec = seconds % 60; // 59
        let remind = Math.floor(seconds / 60)
        let minutes = remind % 60  //
        let hours = Math.floor(remind / 60)

        const padNumber = (number) => {
            return number.toString().length < 2 ? '0' + number : number;
        }
        const result = padNumber(hours) + ':' + padNumber(minutes) + ':' + padNumber(sec);
        return result;
    }
}
console.log(HumanreadableFormat(3999))



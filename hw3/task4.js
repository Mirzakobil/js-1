// class St extends String {
//     constructor(str){
//         super()
//         this.str = str;
//     }
//     removeSpecialCharacters(str){
//         str.replace(/[^a-zA-Z0-9]/g, '')
//     }
// }
// const str = new St("qwerty!@12")
// console.log(str.removeSpecialCharacters("qwerty!@12"))
//in class couldn't implement below is logic
const spechialChars = "12!@qw*&345"
const cleanChars = spechialChars.replace(/[^a-zA-Z0-9]/g, '')
console.log(cleanChars)
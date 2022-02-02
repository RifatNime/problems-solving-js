const greetings = "Hello, how are you?";
function reverseString(text){
    let reverse = '';
    for (const letter of text){
        // console.log(letter);
        reverse = letter + reverse;
        // console.log(reverse)
    }
    console.log(reverse)

}
const reversed = reverseString(greetings);
console.log(reversed);
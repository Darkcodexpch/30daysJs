// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

// Method 01
// const reverseWord = (word) => {
//     let reverseWord = '';
//     for (let i = word.length - 1; i >= 0; i--) {
//         reverseWord += word[i]
//     }
//     return reverseWord;
// }


// Method 02
// const reverseWord = (word) => word.split('').reverse().join('')

// Method 03

// const reverseWord = (word) => {
//     let reverseWord;
//     for (const char of word) {
//         reverseWord = char + word;
//     }
//     return reverseWord;
// }


// Method 04

// const reverseWord = (word) => {
//     let reverseWord='';
//     word.split('').forEach(element => {
//          reverseWord = element + reverseWord;
//     });
//     return reverseWord;
// }

// Method 05
// const reverseWord = (word) => {
//     return word.split('').reduce((revString, char) => char + revString, '');
// }

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

// const isPalindrome = (word) => {
//     const checkWord = word.split('').reverse().join('');
//     return (checkWord === word ?
//           `This word is palindrome ${word}`
//         : `This word is not palindrome ${word}`)

// }


// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

// const reverseInt = (int) => {
//     let newNum = int.toString().split('').reverse().join('');
//     return parseInt(newNum) * Math.sign(int);
// }



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'




// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'


// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz",
//  for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".




const output = reverseInt(123);
console.log(output) 
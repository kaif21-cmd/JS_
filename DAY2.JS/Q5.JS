// infosys 
//check how many vowels in and string 
const str = "HEY MY NAME IS KAIF";
const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(data) {
    let count = 0;
    data.toLowerCase().split("").forEach(ch => {
        vowels.includes(ch) && count++;
    });
    return count;
}

console.log(countVowels(str)); // Output the number of vowels
// Explanation:
// data.toLowerCase() converts the string to lowercase.
// split("") converts the string into an array of characters.
// forEach iterates over each character in the array.
// vowels.includes(ch) checks if the character is a vowel.
// count++ increments the count if the character is a vowel.
// The function returns the final count of vowels.

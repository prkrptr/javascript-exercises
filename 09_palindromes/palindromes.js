const palindromes = function (word) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz0123456789";

    let cleanedString = word.toLowerCase().split('').filter((char) => alphabets.includes(char)).join('');
    let revString = cleanedString.split('').reverse().join('');

    return cleanedString === revString;

};


// Do not edit below this line
module.exports = palindromes;

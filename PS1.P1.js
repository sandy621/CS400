
// returns a string of all the letters in word in alphabetical order
const alphabetical = word =>  {
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()0123456789]/g,"").toLocaleLowerCase().split('').sort().join('');
}



// test cases
console.log(`supercalifragilisticexpialidocious in alphabetical order is: ${alphabetical(`supercalifragilisticexpialidocious`)}`)
console.log(`teacher4 in alphabetical order is: ${alphabetical(`teacher4`)}`)
console.log(`I like apples. in alphabetical order is: ${alphabetical(`I like apples.`)}`)
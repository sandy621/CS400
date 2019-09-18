
// executes second_function on string
const unknown_function = (string, second_function) => {
    return second_function(string)
}

// returns an array containing fragments of the input string str broken on the character 'c'
const broken_c = str => {
    let new_string = replace_all(str, /c/g, ' c')
    let array = new_string.split(' ')
    return array
}

// replaces all 'a' with 'A' and returns object containing original string, modified string,
// number of a's replaced, and length of new string
const cap_A = str => {
    let new_string = replace_all(str, /a/g, 'A')
    let number_replacements = str.match(/a/g)
    const obj = {
        originalString: str,
        modifiedString: new_string,
        numberReplaced: number_replacements.length,
        length: new_string.length
    }
    return obj
}

// helper function: replaces all occurances of replacee with replacer in str
const replace_all = (str, replacee, replacer) => {
    str = str.replace(replacee, replacer)
    return str
}



//expression 1
console.log(`${unknown_function('supercalifragilisticexpialidocious', broken_c)}`)

//expression 2
let object_output = unknown_function('supercalifragilisticexpialidocious', cap_A)
console.log(`originalString: ${object_output.originalString}`)
console.log(`modifiedString: ${object_output.modifiedString}`)
console.log(`numberReplaced: ${object_output.numberReplaced}`)
console.log(`length: ${object_output.length}`)

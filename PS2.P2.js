function* sentence (input) {
    const array = input.split(" ")
    for (index = 0; index < array.length; index++)
        yield array[index]
}

for (word of sentence("All I know is something like a bird within her sang")) {
    console.log(word)
}
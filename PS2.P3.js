function* cubed (array) {
    output = array.map(x => Math.pow(x, 3))
    yield output
}


console.log(cubed([1,2,3,4,5,6,7]).next().value)
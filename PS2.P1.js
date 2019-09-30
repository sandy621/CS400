function* fibs () {
    let [val1, val2, result] = [0, 1, 0]
    yield result
    while (true) {
        result = val1 + val2
        val1 = val2
        val2 = result
        yield result
    }
}


function* fibs_even (count) {
    num = fibs()
    while (count > 0) {
        const ans = num.next().value
        if (ans % 2 == 0) {
            count--
            yield ans
        }
    }
}

for (fib of fibs_even(6)) {
    console.log(fib)
}
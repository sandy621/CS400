
// determines operator in expr and returns function to implement expr with operator
const evaluate = expr => {
    let array = expr.split('')
    const x = array[0]
    const y = array[2]
    if (array[1] == `%`)
        return evaluator = (left, right) => x % y
    if (array[1] == `*`)
        return evaluator = (left, right) => x * y
    if (array[1] == `/`)
        return evaluator = (left, right) => x / y
    if (array[1] == `+`)
        return evaluator = (left, right) => x + y
    if (array[1] == `-`)
        return evaluator = (left, right) => x - y
}

// test cases
const expr1 = '8%3';
let opp1 = evaluate(expr1);
console.log(`${expr1} = ${opp1(expr1)}`)

const expr2 = '4+2';
let opp2 = evaluate(expr2);
console.log(`${expr2} = ${opp2(expr2)}`)

const expr3 = '5*7';
let opp3 = evaluate(expr3);
console.log(`${expr3} = ${opp3(expr3)}`)

const expr4 = '6-1';
let opp4 = evaluate(expr4);
console.log(`${expr4} = ${opp4(expr4)}`)

const expr5 = '9/2';
let opp5 = evaluate(expr5);
console.log(`${expr5} = ${opp5(expr5)}`)
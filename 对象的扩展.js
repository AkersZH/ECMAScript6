// 1.属性的简介表示
let a = 1
let b = {a}
console.log(b) // {a: 1}

function f(x, y) {
    return {x, y}
}
console.log(f(1, 2)) // {x: 1, y: 2}

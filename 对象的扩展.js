// 1.属性的简写表示
let a = 1
let b = {a}
console.log(b) // {a: 1}

function f(x, y) {
    return {x, y}
}
console.log(f(1, 2)) // {x: 1, y: 2}

// 2.方法简写表示
const o = {
    method() {
        return 'hello'
    }
    // method: function() {
    //     return 'hello'
    // }
}

// 3.属性吗表达式
// let obj = {}
// obj.foo = true
// obj['a' + 'bc'] = 123
// console.log(obj)

let propKey = 'foo';

let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
};
console.log(obj)
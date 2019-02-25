// // 1.属性的简写表示
// let a = 1
// let b = {a}
// console.log(b) // {a: 1}

// function f(x, y) {
//     return {x, y}
// }
// console.log(f(1, 2)) // {x: 1, y: 2}

// // 2.方法简写表示
// const o = {
//     method() {
//         return 'hello'
//     }
//     // method: function() {
//     //     return 'hello'
//     // }
// }

// // 3.属性名表达式
// // let obj = {}
// // obj.foo = true
// // obj['a' + 'bc'] = 123
// // console.log(obj)

// let propKey = 'foo';

// let obj = {
//   [propKey]: true,
//   ['a' + 'bc']: 123
// };
// console.log(obj)

// 4.属性的遍历
let a = {a: 1, b: 2, c: 3}
// (1)for...in 循环遍历对象自身的和继承的可枚举属性
for(let temp in a) {
    console.log(temp)
}
// a
// b
// c

// (2)Object.keys(obj) 返回一个数组，包括对象自身的（不含继承的）所有可枚举属性
let temp = Object.keys(a)
console.log(temp) // ['a', 'b', 'c']

// (3)Object.getOwnPropertyNames(obj) 返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
temp = Object.getOwnPropertyNames(a)
console.log(temp) // ['a', 'b', 'c']

// (4)Object.getOwnPropertySymbols(obj) 返回一个数组，包含对象自身的所有 Symbol 属性的键名。
temp = Object.getOwnPropertySymbols(a)
console.log(temp) // []

// (5) Reflect.ownKeys(obj) 返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。
temp = Reflect.ownKeys(a)
console.log(temp) // ['a', 'b', 'c']



// // 1.概述
// // ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，
// // 前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。
// let s = Symbol() // 函数前不能使用new命令，他是值不是对象，类似于字符串的数据类型
// console.log(typeof s) // "symbol"

// let s1 = Symbol('foo');
// let s2 = Symbol('bar');
// console.log(s1) // Symbol(foo)
// console.log(s2) // Symbol(bar)

// const obj = {
//   toString() {
//     return 'abc';
//   }
// };
// const sym = Symbol(obj);
// console.log(sym) // 参数是一个对象，就会调用该对象的toString方法

// // 2.作为属性名的Symbol
// let mySymbol = Symbol();
// // 第一种写法
// let a = {};
// a[mySymbol] = 'Hello!';
// // 第二种写法
// let a = {
//   [mySymbol]: 'Hello!'
// };
// // 第三种写法
// let a = {};
// Object.defineProperty(a, mySymbol, { value: 'Hello!' });
// // 以上写法都得到同样结果
// a[mySymbol] // "Hello!"

// // 不能运用点运算符，用了之后就当字符串处理
// const mySymbol = Symbol();
// const a = {};
// const b = {};
// a.mySymbol = 'Hello!';
// console.log(a[mySymbol]) // undefined
// console.log(a['mySymbol']) // Hello!
// b[mySymbol] = 'Hello!'
// console.log(b[mySymbol]) // Hello!
// console.log(b['mySymbol']) // undefined

// 3.属性名的遍历
const obj = {};
let a = Symbol('a');
let b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
// 使用Object.getOwnPropertyNames方法得不到Symbol属性名，
// 需要使用Object.getOwnPropertySymbols方法。
const objectSymbols = Object.getOwnPropertySymbols(obj); 
console.log(objectSymbols) // [ Symbol(a), Symbol(b) ]

// Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。
let obj2 = {
    [Symbol('my_key')]: 1,
    enum: 2,
    nonEnum: 3
  };
  console.log(Reflect.ownKeys(obj2))

  



  

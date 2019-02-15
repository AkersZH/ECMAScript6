// // 1.函数参数的默认值
// function log(x, y = 'World') {
//     console.log(x, y);
//   }
//   log('Hello') // Hello World
//   log('Hello', 'China') // Hello China
//   log('Hello', '') // Hello

//   function Point(x = 0, y = 0) {
//     this.x = x;
//     this.y = y;
//   }
//   const p = new Point();
//   console.log(p)

// // 2.解构赋值 默认值的结合
//   function foo({x, y = 5}) {
//     console.log(x, y);
//   }
  
//   foo({}) // undefined 5
//   foo({x: 1}) // 1 5
//   foo({x: 1, y: 2}) // 1 2
//   foo() // TypeError: Cannot read property 'x' of undefined

//   function fetch(url, { body = '', method = 'GET', headers = {} }) {
//     console.log(method);
//   }
//   fetch('http://example.com', {})
//   // "GET"
//   fetch('http://example.com')
//   // 报错

//   function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
//     console.log(method);
//   }
//   fetch('http://example.com')
//   // "GET"

//   // 写法一
// function m1({x = 0, y = 0} = {}) {
//   return [x, y];
// }
//   // 写法二
// function m2({x, y} = { x: 0, y: 0 }) {
//   return [x, y];
// }
// // 函数没有参数的情况
// m1() // [0, 0]
// m2() // [0, 0]

// // x 和 y 都有值的情况
// m1({x: 3, y: 8}) // [3, 8]
// m2({x: 3, y: 8}) // [3, 8]

// // x 有值，y 无值的情况
// m1({x: 3}) // [3, 0]
// m2({x: 3}) // [3, undefined]

// // x 和 y 都无值的情况
// m1({}) // [0, 0];
// m2({}) // [undefined, undefined]

// m1({z: 3}) // [0, 0]
// m2({z: 3}) // [undefined, undefined]

// // 3.参数默认值的位置
// // 例一
// function f(x = 1, y) {
//     return [x, y];
//   }
  
//   f() // [1, undefined]
//   f(2) // [2, undefined])
//   f(, 1) // 报错
//   f(undefined, 1) // [1, 1]
  
//   // 例二
//   function f(x, y = 5, z) {
//     return [x, y, z];
//   }
  
//   f() // [undefined, 5, undefined]
//   f(1) // [1, 5, undefined]
//   f(1, ,2) // 报错
//   f(1, undefined, 2) // [1, 5, 2]
//   /* 
//     上面代码中，有默认值的参数都不是尾参数。这时，无法只省略该参数，
//     而不省略它后面的参数，除非显式输入undefined。
//   */

// // 如果传入undefined，将触发该参数等于默认值，null则没有这个效果。
// function foo(x = 5, y = 6) {
//   console.log(x, y);
// }
 
// foo(undefined, null)
// // 5 null
// // 上面代码中，x参数对应undefined，结果触发了默认值，y参数等于null，就没有触发默认值。

// // 4.函数的length属性
// (function (a) {}).length // 1
// (function (a, b = 1) {}).length // 1
// (function (b = 1, a) {}).length // 0

// 5.函数的name属性
function testFuncName () {};
console.log(testFuncName.name)
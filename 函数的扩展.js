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

// // 5.函数的name属性
// function testFuncName () {};
// console.log(testFuncName.name)

// // 箭头函数
// var f = v => v;
// // 等同于
// // var f = function (v) {
// //     return v
// // }
// console.log(f(1)) // 1

// // 箭头函数没有参数需要用括号
// var f = () => 5;
// console.log(f())

// // 应用
// // 1.简化回调函数
// let res = [1, 2, 3].map(x => x * x)
// console.log(res)
// let res2 = [2, 1, 3, 0].sort((a,b) => a - b)
// console.log(res2)

// // 箭头函数的注意点
// // （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

// // （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

// // （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

// // （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
// function foo() {
//     setTimeout(() => {
//       console.log('id:', this.id);
//     }, 100);
//   }
  
//   var id = 21;
  
//   foo.call({ id: 42 }); // 42


// function Timer() {
//     this.s1 = 0;
//     this.s2 = 0;
//     // 箭头函数
//     setInterval(() => this.s1++, 1000);
//     // 普通函数
//     setInterval(ubanfunction () {
//       this.s2++;
//     }, 1000);
//   }
  
//   var timer = new Timer();
  
//   setTimeout(() => console.log('s1: ', timer.s1), 3100); // 3
//   setTimeout(() => console.log('s2: ', timer.s2), 3100); // 0

// //定义一个对象
// var obj = {
//     x:100, //属性x
//     show(){
//     //延迟500毫秒，输出x的值
//         setTimeout(
//            //匿名函数
//            function(){console.log(this.x);}, // 指向setTimeOUT的windows.x
//            500
//        );
//     }
// };
// obj.show();//打印结果：undefined

// 定义一个对象
var obj = {
    x:100,//属性x
    show(){
        //延迟500毫秒，输出x的值
        setTimeout(
           //不同处：箭头函数
           function () { console.log(this.x)},
           500
        );
    }
};
obj.show();//打印结果：100

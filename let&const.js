// let声明的变量只在它所在的代码块有效。
for (let i = 0; i < 10; i++) {}
console.log(i) // ReferenceError: i is not defined

for (var i = 0; i < 10; i++) {}
console.log(i) // 10

var a = []
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]() // 10

var a = []
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]() // 6

// for循环变量和循环内部不在同一个作用域
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
  }
  // abc
  // abc
  // abc

// 不存在变量提升
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
// 当脚本运行时 var定义的变量就已经存在，值为undefined, 而let一定要先定义才能使用

// 暂时性死区
 var tmp = 123
  if (true) {
      tmp = 'abc';
      let tmp;
  } // 报错
// 一旦定义了let 和 const变量，在定义前使用都会报错，就算使用typeof也会报错

// 不允许重复声明
function func() {
    let a = 'a';
    var a = 'a';
} // 报错

function func(a) {
    let a ;
} // 报错
func(1)


// const 
const PI = 3.1415926;
PI = 3;
// 报错，const 不能修改值，在定义的同时需要赋值

const foo = {}
foo.name = 'Akers' // 可行
// const 不能修改的指向的内存地址，对于复杂的对象和数组，其中的数据是可以改变的











// 变量赋值方式
// ES6新增方式,从数组中提取值然后赋值，解构赋值
let [a, b, c] = [1, 2, 3]
a // 1
b // 2
c // 3

// 匹配模式，左右对应就能赋上相同的值
let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

// null和undefined的区别，只有当一个数组成员严格等于undefined时，默认值才会生效。
let [x = 1] = [undefined];
x // 1
let [x = 1] = [null];
x // null

// 对象匹配模式，和数组不同，数组根据位置，对象根据属性的名称
let {a, b} = {b: 'b', a: 'a'}
a // a
b // b
let {c} = {a: 'a'}
c // undefined 未匹配到
// 对象的解析赋值的根本写法,冒号前代表后面值的key, 真正定义的是冒号之后的变量
let {a: c, b: b} = {a: 'a', b: 'b'}
c // a c才是变量
a // error a是匹配的模式
// 默认值 undefined和null与数组解构赋值相同

// 字符串的解构赋值
const [a, b, c, d] = 'abcd'
a // a
b // b
c // c
d // d
let {length: len} = 'abcd'
len = 5

// 数值和布尔值的解构赋值
let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: s} = true;
s === Boolean.prototype.toString // true

let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError

// 函数参数的解构赋值
function add([a, b]) {
    return a + b;
}
console.log(add([1, 2]));

let res = [[1, 2], [3, 4], [5, 6]].map(([a, b]) => a + b);
console.log(res) // [3, 7, 11]

函数解构赋值的默认值
function move ({x = 0, y = 0} = {}) {
    console.log([x, y])
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

let res = [1, undefined, 3].map((x = 'yes') => x);
console.log(res)
// [ 1, 'yes', 3 ]

// 解构赋值的用途
// 1. 交换变量的值
let [x, y] = [1, 2];
console.log([x, y]);
[x, y] = [y, x];
console.log([x, y]);
//[1, 2]
//[2, 1]

// 2.从函数返回多个值
function func () { // 返回数组
    return [1, 2, 3]
}
let [a, b, c] = func();

function func () { // 返回对象
    return {a: 'this is a', b: 'this is b'}
}
let {a, b} = func();

// 3.函数参数的定义
// 参数是一组有次序的值
function f([x, y, z]) {}
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) {}
f({z: 3, y: 2, x: 1});

// 4.提取快速提取json数据
let jsonData = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd'
}
let {a, c, d} = jsonData
console.log(a) // a
console.log(c) // c
console.log(d) // d

// 5.函数参数的默认值
jQuery.ajax = function (url, {
    async = true,
    beforeSend = function () {},
    cache = true,
    complete = function () {},
    crossDomain = false,
    global = true,
    // ... more config
  } = {}) {
    // ... do stuff
  };
// 可以大量的减少代码中无用的判断赋值

// 6.遍历Map结构
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (let [key, value] of map) {
    console.log(key + ' is ' + value)
}

// 7.加载模块指定方法
const { SourceMapConsumer, SourceNode } = require("source-map");









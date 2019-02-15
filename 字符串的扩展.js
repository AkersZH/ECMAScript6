// 1.字符串的遍历器
let foo = 'hello,world';
for (let world of foo) {
    console.log(world)
}

// 2.传统js只有indexOf方法，ES6新增3个新的
// includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
let s = 'Hello world';
console.log(s.startsWith('Hello')) // true
console.log(s.endsWith('d')) // true
console.log(s.includes('o')) // true

let s = 'Hello world!';
console.log(s.startsWith('world', 6)) // true
console.log(s.endsWith('Hello', 5)) // true
console.log(s.includes('Hello', 6)) // false
// 上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。
// 它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。

// 3.repeat 返回一个新的字符串，数字表示重复次数
console.log('x'.repeat(3)) // "xxx"
console.log('hello'.repeat(2)) // "hellohello"
console.log('na'.repeat(0)) // ""
console.log('na'.repeat(2.9)) // "" （如果n是小数将会取整）
console.log('na'.repeat(-2)) // "" （如果n是小负数报错， 0到-1之间取整0不报错，NaN 等同于0）
console.log('na'.repeat('3')) // 自动转换数字
console.log('na'.repeat('na')) // 自动转换数字,等同于0

// 4.padStart(), padEnd()
// ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。
// padStart()用于头部补全，padEnd()用于尾部补全。

console.log('x'.padStart(2, 'ab')) // ax(省去第二个参数空格补全)
let num = '10'
console.log(num.padStart(2, '0')) // 一般用于补全数字位数

// 5.模板字符串
let a = 1;
let b = 2;
console.log(`string text ${a} 1 \`
string text ${b} 2`);
// 大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性
console.log(`${a} + ${b} = ${a + b}`);
function fn() {
    return "Hello World";
  }
console.log(`foo ${fn()} bar`) // ${}还能调用方法
// 引用变量 ${变量名称}。
// 需要使用反引号，则前面要用反斜杠转义。
console.log(`hello, ${place}`) // 报错plcae没有定义
console.log(`hello, ${'place'}`) // hello, place ,字符串原样输出

// 1.ES6 在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法。
// Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。
console.log(Number.isFinite(15)); // true
console.log(Number.isFinite(0.8)); // true
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite('foo')); // false
console.log(Number.isFinite('15')); // false
console.log(Number.isFinite(true)); // false
// 注意，如果参数类型不是数值，Number.isFinite一律返回false。

Number.isNaN(NaN); // true
Number.isNaN(15); // false
Number.isNaN('15'); // false
Number.isNaN(true); // false
Number.isNaN(9/NaN); // true
// Number.isNaN()只有对于NaN才返回true，非NaN一律返回false。

// 2.ES6 Number.parseInt(), Number.parseFloat()
console.log(Number.parseInt('12.3545'))
console.log(Number.parseFloat('12.3545#'))

// 3.Number.isInteger() 判断数值是否是整数
// 如果参数不是数值，Number.isInteger返回false。
Number.isInteger(25) // true
Number.isInteger(25.0) // true
Number.isInteger(25.3) // false
Number.isInteger('25') // false
// 存在误判
console.log(Number.isInteger(3.0000000000000002)) // 精度超过限度后面会被抛弃
// 绝对小数，会被当为0

// 4.指数运算符
2 ** 2 // 4
2 ** 3 // 8

/* 
 这个运算符的一个特点是右结合，而不是常见的左结合。
 多个指数运算符连用时，是从最右边开始计算的。
*/
// 相当于 2 ** (3 ** 2)
2 ** 3 ** 2
// 512




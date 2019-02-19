// 1.扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
console.log(...[1, 2, 3])
console.log(1, ...[2, 3, 4], 5)
function add(x, y, z) {
    console.log(x + y + z)
  }
  
  const numbers = [4, 38, 1];
  add(...numbers) // 43

function f(v, w, x, y, z) {
    console.log(v, w, x, y, z)
}
const args = [0, 1];
f(-1, ...args, 2, ...[3]);

// 2.扩展运算符后面还可以放置表达式。
const arr = [
  ...(x > 0 ? ['a'] : []),
  'b',
];

// 3.将一个数组添加到另一个数组后面
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1.push(...arr2);
console.log(arr1)

// 4.复制数组
const a1 = [1, 2];
// 写法一
const a2 = [...a1];

// 5.合并数组
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// ES6 的合并数组 //浅拷贝
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]

// 6.解构赋值结合
const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]

const [first, ...rest] = [];
first // undefined
rest  // []

const [first, ...rest] = ["foo"];
first  // "foo"
rest   // []

// 7.字符串
let res = [...'hello']
// [ "h", "e", "l", "l", "o" ]

// 8.Array.from()将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
console.log(arr2)

// 9.Array.of将一组值转换为数组
console.log(Array.of(3, 2, 5))
console.log(Array.of(5))
console.log(Array.of())

// 10.copyWithin()
// 数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置
//（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
// target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
// start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
// end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]

// 11.数组的find()和findIndex()
let array = Array.of(1, 3, 5, 7, 9)
let res = array.find((n) => n == 5)
console.log(res)

// 12.fill()
// 使用给定的值，填充一个数组
let res = [1, 2, 3].fill(7)
console.log(res)

let arr = new Array(3).fill({name: "Mike"});
console.log(arr)
arr[0].name = "Ben";
console.log(arr)

// 13.includes()
// 数组中是否包含给定的值
let a1 = [1, 2, 3].includes(2)
let a2 = [1, 2, 3].includes(4)
console.log(a1, a2)

// 14.flat 将数组降维
[1, 2, [3, [4, 5]]].flat()
// [1, 2, 3, [4, 5]]

[1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]

[1, [2, [3]]].flat(Infinity) // 直接降到1维
// [1, 2, 3]

// 15.flatMap() 对原数组每个成员执行函数,然后执行flat, 只能展开一层，生成新的数组
let array = Array.of(1, 2, 3)
let res = array.flatMap((n) => [n, n * n])
console.log(res)

// 16. 数组的空位
let res = [undefined, undefined, undefined]
console.log(res)
let res2 = [,,]
console.log(res2)



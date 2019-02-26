// 1.基本用法
const set = new Set();
[1, 1, 2, 2, 5, 4, 4, 3].forEach(n => set.add(n));
for (let i of set) {
    console.log(i)
}
// 1 2 5 4 3 集合去重，不会添加重复元素

// 2.set可以接受一个数组作为参数
const set2 = new Set([1, 1, 2, 2, 5, 4, 4, 3]);
console.log([...set2])

let str = [...new Set('ababbc')].join('')
console.log(str)
// "abc" 去除重复字符串

// 3.set实例的属性和方法
// add(value) 添加某个值，返回Set结构本身
// delete(value) 删除某个值，返回一个boolean, 表示是否删除成功。
// has(value) 返回一个boolean,表示set中是否有这个值
// clear() 清除所有成员，没有返回值
let testSet = new Set()
testSet.add(1).add(2).add(2)
console.log(testSet.size) // 2
console.log(testSet.has(1)) // true
console.log(testSet.has(2)) // true 
console.log(testSet.has(3)) // false 
testSet.delete(2)
console.log(testSet.has(2)) // false

// 将set转为数组Array.from
// 数组去重
let q = [2,2,3,3,4,5,6,7]
let res = Array.from(new Set(q))
console.log(res) // 2 3 4 5 6 7

// 4.集合遍历操作
// (1) keys() 返回键名的遍历器
// (2) values() 返回键值的遍历器
// (3) entries() 返回键值对的遍历器
// (4) forEach() 使用回调函数遍历每个成员

let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
    console.log(item)
}

for (let item of set.values()) {
    console.log(item)
}

for (let item of set.entries()) {
    console.log(item)
}

set.forEach((value, key) => console.log(key + ' : ' + value))

// 5.遍历的应用
// (1)集合转数组
let set = new Set(['1', '2', '3']);
let arr = [...set];
console.log(arr); // ['1', '2', '3']

// (2)数组去重
let a = [1, 3, 3, 5, 7, 9];
let newArray = [...new Set(a)];
console.log(newArray);

let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
console.log(set)
// 返回Set结构：{2, 4, 6}

let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));
console.log(set)
// 返回Set结构：{2, 4}

let a = new Set([1, 2, 3])
let b = new Set([4, 2, 3])
// 并集
let union = new Set ([...a, ...b])
console.log(union)

// 交集
let intersect = new Set([...a].filter(x => b.has(x)))
console.log(intersect)

// 差集
let difference = new Set([...a].filter(x => !b.has(x)))
console.log(difference)

// 6.WeakSet
// 和set类似，但是它的成员只能是对象,不能是其他类型的值。

// 7.Map
// 存在意义：js的Object本质上是键值对应扥集合，但是传统上只能用字符串当键。
let a = new Map();
let o = {p: 'Hello World'};

a.set(o, 'content')
console.log(a.get(o)) // content
a.has(o) // true
a.delete(o) // true
a.has(o) // false

const map = new Map([['name', '张三'], ['title', 'Author']])
console.log(map) //Map { 'name' => '张三', 'title' => 'Author' }

// 8.map的属性及方法
const map = new Map()
map.set('foo', true) // set
console.log(map.size) // size
console.log(map.get('foo')) // get
console.log(map.has('foo')) // has
console.log(map.delete('foo')) // delete
console.log(map.clear()) // clear

// 9.遍历方法
// 1.keys() 2.values() 3.entries() 4.forEach()
// 和set类似

// 10.map转数组 ...扩展运算符
const map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);
  [...map.keys()];
  // [1, 2, 3]
  [...map.values()];
  // ['one', 'two', 'three']
  [...map.entries()];
  // [[1,'one'], [2, 'two'], [3, 'three']]
  [...map];
  // [[1,'one'], [2, 'two'], [3, 'three']]

// 11weakMap
// WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。





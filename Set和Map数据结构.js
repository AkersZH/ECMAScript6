// // 1.基本用法
// const set = new Set();
// [1, 1, 2, 2, 5, 4, 4, 3].forEach(n => set.add(n));
// for (let i of set) {
//     console.log(i)
// }
// // 1 2 5 4 3 集合去重，不会添加重复元素

// // 2.set可以接受一个数组作为参数
// const set2 = new Set([1, 1, 2, 2, 5, 4, 4, 3]);
// console.log([...set2])

// let str = [...new Set('ababbc')].join('')
// console.log(str)
// // "abc" 去除重复字符串

// // 3.set实例的属性和方法
// // add(value) 添加某个值，返回Set结构本身
// // delete(value) 删除某个值，返回一个boolean, 表示是否删除成功。
// // has(value) 返回一个boolean,表示set中是否有这个值
// // clear() 清除所有成员，没有返回值
// let testSet = new Set()
// testSet.add(1).add(2).add(2)
// console.log(testSet.size) // 2
// console.log(testSet.has(1)) // true
// console.log(testSet.has(2)) // true 
// console.log(testSet.has(3)) // false 
// testSet.delete(2)
// console.log(testSet.has(2)) // false

// // 将set转为数组Array.from
// // 数组去重
// let q = [2,2,3,3,4,5,6,7]
// let res = Array.from(new Set(q))
// console.log(res) // 2 3 4 5 6 7

// // 4.集合遍历操作
// // (1) keys() 返回键名的遍历器
// // (2) values() 返回键值的遍历器
// // (3) entries() 返回键值对的遍历器
// // (4) forEach() 使用回调函数遍历每个成员

// let set = new Set(['red', 'green', 'blue']);

// for (let item of set.keys()) {
//     console.log(item)
// }

// for (let item of set.values()) {
//     console.log(item)
// }

// for (let item of set.entries()) {
//     console.log(item)
// }

// set.forEach((value, key) => console.log(key + ' : ' + value))

// 5.遍历的应用
// (1)集合转数组
let set = new Set(['1', '2', '3']);
let arr = [...set];
console.log(arr); // ['1', '2', '3']

// (2)数组去重
let a = [1, 3, 3, 5, 7, 9];
let newArray = [...new Set(a)];
console.log(newArray);



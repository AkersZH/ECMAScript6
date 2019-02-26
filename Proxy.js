// /*1. Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，
//  *所以属于一种“元编程”（meta programming），即对编程语言进行编程。
//  *Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，
//  *都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
//  *Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
// */
// var obj = new Proxy({}, {
//     get: function (target, key, receiver) {
//       console.log(`getting ${key}!`);
//       return Reflect.get(target, key, receiver);
//     },
//     set: function (target, key, value, receiver) {
//       console.log(`setting ${key}!`);
//       return Reflect.set(target, key, value, receiver);
//     }
//   });

// obj.count = 1
// //  setting count!
// ++obj.count
// //  getting count!
// //  setting count!
// //  2

// // handler没有设置任何拦截
// var proxy = new Proxy({}, {});
// proxy.a = 'b';
// console.log(proxy.a) // b

// // 2. Proxy实例的方法
// // (1)get(目标对象, 属性名, proxy实例本身)
// // (2)set(目标对象, 属性名, 属性值, Proxy实例本身)
// // (3)apply(目标对象, 目标对象的上下文对象（this）, 目标对象的参数数组。)
// // (4)has(目标对象, 需查询的属性名)
// // (5)construct(目标对象, 构造函数的参数对象)
// // (6)deleteProperty(target, key)
// // (7)defineProperty(target, key, descriptor)
// // (8)getOwnPropertyDescriptor(target, key)
// // (9)getPrototypeOf()
// // (10)isExtensible()
// // (11)ownKeys()
// // (12)preventExtensions()
// // (13)setPrototypeOf()
// // (14)Proxy.revocable()

// 3.this问题


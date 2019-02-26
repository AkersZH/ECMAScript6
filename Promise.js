/**
 * Promise 异步编程的解决方案。
 * 一个容器，保存着一个异步操作的结果
 * 三种状态：pedding(进行), fulfilled(完成), rejected(失败)
 * Promise有两个特点
 * 1.不受外界影响，只有异步的结果可以决定当前是哪一种状态
 * 2.一旦状态改变，就不会再变
 * 状态改变只有两种情况,状态一旦改变就不会变了，这是称为resolved(已定型)
 * 1.pedding=>fulfilled
 * 2.pedding=>rejected
 */

//  // 1.基本用法
//  // 创建Promise实例
//  const promise = new Promise(function(resolve, reject){
//     if (true) {
//         resolve(value)
//     } else {
//         reject(error)
//     }
//  })
//  // 
//  promise.then(function(value) {
//      // success
//  }, function(error) {
//      // failure
//  })

// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//       setTimeout(resolve, ms, 'done');
//     });
//   }
  
//   timeout(100).then((value) => {
//     console.log(value);
//   }, (error) => {
//       console.log(error)
//   });

//   let promise = new Promise(function(resolve, reject) {
//     console.log('Promise');
//     resolve();
//   }); // Promise新建后就会立即执行
  
//   promise.then(function() {
//     console.log('resolved.');
//   }); // 已定型输出
  
//   console.log('Hi!'); // then将在当前脚本所有同步任务执行完才会执行,所以先输出

// // 2.Promise.prototype.then()
// // 为状态改变时添加回调韩式
 
// // 3.Promise.prototype.catch()
// // 发生rejection的别名

// // 4.Promise.prototype.finally()
// // 不管promise的状态是什么都会执行操作

// // 5.Promise.all
// const p = Promise.all([p1, p2, p3]);
// // 只有p1, p2, p3 都为fulfilled, p才能的状态才会变成fulfilled
// // 只要p1, p2, p3 中有一个状态为rejected, p的状态就会变为rejected

// // 6.Promise.race()
// const p = Promise.race([p1, p2, p3]);
// // p1, p2, p3 谁先变就是谁

// 7.Promise.resolve()
// 将现有对象转换为Promise对象
// (1)参数是一个Promise实例，原封不动返回实例
// (2)参数是一个对象（具有then方法的对象）,转为Promise,并且执行then中的方法




// 1.async 函数是什么？一句话，它就是 Generator 函数的语法糖。
// async函数就是将 Generator 函数的星号（*）替换成async，
// 将yield替换成await，仅此而已。
// 2.async对Generator的改进
// (1) 不用next(),直接执行就可以
// (2) 语义更好理解
// (3) 更广的适用性
// (4) 返回值是Promise

// 2.基本用法
// async 函数返回一个Promise对象

// 3.返回Promise对象
async function f() {
    let a = await Promise.resolve('hello world'); // 不会执行
    console.log('111111')
    return a
}
f().then(v => console.log(v))

// async function f() {
//     throw new Error('Error')
// }
// f().then(v => console.log(v), e => console.log(e))

// async函数中只有等到所有的await执行完才会执行then，除非遇到return或者抛出异常

// 4.await命令
// await 命令后面是Promise对象，如果不是直接返回对应的值
// 一旦出现rejected状态，后面的await不再会执行。如果需要继续执行，捕获异常await

// 5.错误处理
// await后面异常出错，相当于async函数返回rejected对象

// 6.注意
// (1) 最好将await命令放在try...catch中，.catch()
// (2) 多个await相互独立，最好让他们同时触发， await Promise.all([function1(), function2()])
// (3) await 只能用于async函数中
// (4) 不要使用forEach

// 7.async函数的实现原理
// 将 Generator 函数和自动执行器，包装在一个函数里。
async function fn(args) {
    // ...
  }
  
  // 等同于

  function fn(args) {
    return spawn(function* () {
      // ...
    });
  }










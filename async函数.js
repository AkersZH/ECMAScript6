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


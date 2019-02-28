// 1.Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
  }
  var hw = helloWorldGenerator();
  console.log(hw);
    /**上面代码定义了一个 Generator 函数helloWorldGenerator，
   * 它内部有两个yield表达式（hello和world），
   * 即该函数有三个状态：hello，world 和 return 语句（结束执行） */
  console.log(hw.next())
  console.log(hw.next())
  console.log(hw.next())
  console.log(hw.next())

  // 调用方法并不执行，并不返回值而是返回一个指向内部状态的指针对象
  // 即返回是一个遍历器，next()到yield一次次结束，最终return结束

// 2.yield表达式
function* gen() {
    yield  123 + 456;
  }
let a = gen()
console.log(a.next())

// 3.与Iterator接口的关系

// 4.next方法的参数
function* dataConsumer() {
    console.log('Started');
    console.log(`1. ${yield}`);
    console.log(`2. ${yield}`);
    // return 'result';
  }
  
  let genObj = dataConsumer();
  genObj.next();
  // Started
  genObj.next('a')
  // 1. a
  genObj.next('b')
  // 2. b

  var clock = function* () {
    while (true) {
      console.log('Tick!');
      yield;
      console.log('Tock!');
      yield;
    }
  };

  let d = clock()
  d.next()
  d.next()
  d.next()
  d.next()










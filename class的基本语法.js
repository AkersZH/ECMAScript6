// //1. js 的传统生成对象的方法是构造函数
// function Point (x, y) {
//     this.x = x
//     this.y = y
// }
// Point.prototype.toString = function () {
//     return '(' + this.x + ', ' + this.y + ')'
// }
// let p = new Point(2, 3)
// console.log(p.toString())

// 2.ES6 的class改写
/**定义“类”的方法的时候，前面不需要加上function这个关键字，
 * 直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。 
 * */
class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
  }

let p = new Point(1, 1)
console.log(p.toString())


let name = '张三';
let factory = function () {
    this.a = 'a';
    this.b = 'b';
    this.c = {
        a: 'a+',
        b: () => {                  //箭头函数的this, 定义是的对象
            return this.a
        }
    }
};
console.log(new factory().c.b());
const age = '18岁';

console.log(name,age);
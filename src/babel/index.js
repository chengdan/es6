'use strict';

var name = '张三';
var factory = function factory() {
    var _this = this;

    this.a = 'a';
    this.b = 'b';
    this.c = {
        a: 'a+',
        b: function b() {
            //箭头函数的this, 定义是的对象
            return _this.a;
        }
    };
};
console.log(new factory().c.b());
var age = '18岁';

console.log(name, age);
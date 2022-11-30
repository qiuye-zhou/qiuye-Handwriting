function _new () {
    // 创建新对象
    let obj = Object.create(null);
    let Constructor = [].shift.call(arguments)

    // 将对象的__proto__赋值为构造函数的prototype属性
    obj.__proto__ = Constructor.prototype;

    // 将构造函数内部的this赋值为新对象
    let ret = Constructor.apply(obj, arguments);

    return typeof ret === "object" && ret !== null ? ret : obj
}

function Test (name, age) {
    this.name = name;
    this.age = age;
}

let testres1 = _new(Test, 'test1', 12)
let testres2 = _new(Test, 'test2', 22)

console.log(testres1);
console.log(testres2);

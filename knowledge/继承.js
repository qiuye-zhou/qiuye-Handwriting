/**
 *  原型链继承
 *  优点：父类新增原型方法属性，子类都能访问
 *  缺点：由于原型中的引用被共享，导致实例上的修改会直接影响到原型；
 *        创建子类实例时，无法向父类构造函数传参；无法实现多继承
 */

function SubperType() {
    this.arr = [1, 2, 3];
}

function SubType() {}

SubType.prototype = new SubperType();
SubType.prototype.constructor = SubType;

console.log('---原型链继承Test---');

let sub1 = new SubType();
let sub2 = new SubType();

sub1.arr.push(4);

console.log(sub1.arr);
console.log(sub2.arr);
console.log(sub1 instanceof SubperType);

console.log('------');


/**
 *  构造函数继承
 *  优点：解决了原型链继承中子类实例共享父类引用属性的问题；
 *        可以在子类型构造函数中向父类构造函数传递参数；
 *        可以实现多继承（call 多个父类对象）
 *  缺点：实例并不是父类的实例，只是子类的实例；
 *        只能继承父类的实例属性和方法，不能继承原型属性和方法；
 *        无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
 */

function SubperType2 (name) {
    this.name = name;
    this.arr = [1, 2, 3];
}

SubperType2.prototype.say = function() {
    console.log('say');
}

function SubType2 (name) {
    SubperType2.call(this, name)
}

console.log('---构造函数继承---');

let sub21 = new SubType2('sub21');
let sub22 = new SubType2('sub22');

sub21.arr.push(4);

console.log(sub21.arr);
console.log(sub22.arr);
console.log(sub21 instanceof SubperType2);
console.log(sub22.prototype, '使用构造函数继承并没有访问到原型链，prototype为undefined，say 方法不能调用');

console.log('------');

/**
 *  组合继承
 *  优点：可以继承实例属性和方法，也可以继承原型属性和方法
 *        不存在引用属性共享问题
 *        可以传参
 *        函数可以复用
 *  缺点：调用了两次父类构造函数，生成两份实例
 */

function SubperType3 (name) {
    this.name = name;
    this.a = 'i am a';
    this.arr = [1, 2, 3];
}

SubperType3.prototype.say = function() {
    console.log('prototype say()');
}

function SubType3(name) {
    SubperType3.call(this, name) // 第二次调用SubperType3
}

SubType3.prototype = new SubperType3(); // 第一次调用 SubperType3
SubType3.prototype.constructor = SubType3;

console.log('---组好继承---');

let sub31 = new SubType3('suub31');
let sub32 = new SubType3('suub32');

sub31.arr.push(4);

console.log(sub31);
console.log(sub32);
console.log(sub31 instanceof SubperType3);

sub31.say()

console.log('------');

/**
 *  寄生组合式继承
 *  优点：只调用了一次 SuperType 构造函数，避免了在 SubType.prototype 上创建不必要的属性
 *        能够正常使用 instanceof 和 isPrototypeOf()
 */

function subper(name) {
    this.name = name;
    this.a = 'is a';
    this.arr = [1, 2, 3];
}

subper.prototype.say = function() {
    console.log(this.name);
}

function sub(name, age) {
    this.arr = 'arr';
    subper.call(this, name);
    this.age = age;
}

sub.prototype = Object.create(subper.prototype) // 寄生
sub.prototype.conlogage = function() {
    console.log(this.age);
}
sub.prototype.constructor = sub; // 将构造器指回sub

console.log('---寄生组合继承---');

let su1 = new sub('su1', 11);
let su2 = new sub('su2', 22);

su1.arr.push(4);

console.log(su1);
console.log(su2);
console.log(su1 instanceof subper);

su1.conlogage();
su2.conlogage();
su2.say();

console.log('------');

/**
 *  ES6中的class继承
 *  优点：清晰方便
 *  缺点：不是所有浏览器都支撑
 */

class AAA {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.arr = [1, 2, 3]
    }

    sayfname() {
        console.log('父类方法', this.name);
    }
}

class aaa extends AAA {
    constructor(name, age) {
        super(name, age)
        this.color = 'aaaaaa';
    }

    sayname() {
        console.log('子类方法', this.name);
    }
}

console.log('---ES6中的class继承---');

let test1 = new aaa('test1', 22)
let test2 = new aaa('test2', 22)

test1.arr.push(4);

console.log(test1);
console.log(test2);
console.log(test1 instanceof AAA);
test1.sayname()
test1.sayfname()

console.log('------');
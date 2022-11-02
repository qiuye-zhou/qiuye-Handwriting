class Once {
    private result: string | boolean | Function = false
    private Fun: Function = () => {}

    once (fun: Function) {
        this.Fun = fun
        this.result = false
        return this.fun(this)
    }
    fun (that: Once) {
        return function (...args: any) {
            if (!that.result) {
                console.log('---调用成功---')
                that.result = that.Fun(...args)
                if (!that.result) {
                    that.result = that.Fun
                }
                return that.result
            } else {
                return that.result
            }
        }
    }
}

const once = new Once()

const once1 = once.once(function (str: string) {
    console.log(str)
})

once1('第一次调用')

once1('第二次调用')

const once2 = once.once(function (str: string) {
    return `${str}---返回结果`
})

console.log(once2('第一次调用'))

console.log(once2('第二次调用'))

const once3 = once.once(function (str: string) {
    return `${str}---once3`
})
const once4 = once.once(function (str: string) {
    return `${str}---once4`
})


console.log(once3('once3调用')) // once3调用---once4

console.log(once4('once4调用')) // once3调用---once4
// 这里可以看到后面的方法覆盖了前一个，调用的时候once3调用的函数是最后面once4传入的函数，如果不想要这样的结果就需要增加一个类型判断了

console.log('\n------分割线------\n------下面是增加type的once------\n')

// 下面once方法增加了type
type newOnceFun = {
    [propsName: string | symbol | number]: Function
}

type newOnceResult = {
    [propsName: string | symbol | number]: string | boolean | Function
}

class Once2 {
    private result: newOnceResult = {}
    private Fun: newOnceFun = {}

    once (type: string, fun: Function) {
        this.Fun[type] = fun
        this.result[type] = false
        return this.fun(this)
    }
    fun (that: Once2) {
        return function (type: string, ...args: any) {
            if (!that.result[type]) {
                console.log(`---${type}调用成功---`)
                that.result[type]= that.Fun[type](...args)
                if (!that.result[type]) {
                    that.result[type] = that.Fun[type]
                }
                return that.result[type]
            } else {
                return that.result[type]
            }
        }
    }
}

const newonce = new Once2()

const newonce1 = newonce.once('new1', function (str: string) {
    console.log(str)
})

newonce1('new1', '第一次调用')

newonce1('new1', '第二次调用')

const newonce2 = newonce.once('new2', function (str: string) {
    return `${str}---返回结果`
})

console.log(newonce2('new2', '第一次调用'))

console.log(newonce2('new2', '第二次调用'))

const newonce3 = newonce.once('new3', function (str: string) {
    return `${str}---once3`
})
const newonce4 = newonce.once('new4', function (str: string) {
    return `${str}---once4`
})


console.log(newonce3('new3', 'once3调用'))

console.log(newonce4('new4', 'once4调用'))

// 这样就不会出现上面的情况了
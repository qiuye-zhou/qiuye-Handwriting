function throttle (fun, wait) {
    let timer
    return function () {
        let that = this
        let args = arguments

        if (!timer) {
            timer = setTimeout(function () {
                timer = null
                fun.apply(that, args)
            }, wait)
        }
    }
}

const throttle1 = throttle(function (...args) {
    console.log('调用成功',args)
}, 3000)

throttle1('a', 'b', 'c')

throttle1('aa', 'bb', 'cc')

setTimeout(() => {
    throttle1('aaa', 'bbb', 'ccc')
},5000)

// 使用时间判断
// {   // 对应代码
//     let now = Date.now();
//     if (now - time > wait) {
//         fn.apply(_this, args);
//         time = now;
//     }
// }
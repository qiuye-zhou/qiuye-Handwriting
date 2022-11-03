function debounce (fun, time) {
    let task

    // 返回可调用的对象
    return function () {
        // 防抖函数里面可能有this相关的语句，this必须指向调用它的对象，而定时器里面的this指向window
        let that = this
        let args = arguments

        if (task) clearTimeout(task)

        task = setTimeout(() => {
            task = null
            fun.apply(that, args)
        }, time)
    }
}

const debounce1 = debounce(function(...args) {
    console.log('调用成功',args)
}, 3000)

debounce1('a','b','c')

debounce1('aa','bb','cc')

debounce1('aaa','bbb','ccc')
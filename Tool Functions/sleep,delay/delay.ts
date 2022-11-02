function delay<P extends any[], T extends (...args: P) => any = () => null> 
(fun: T, time: number = 0, ...args: P) {
    return new Promise((resolve) => {
        setTimeout(() => {
            Promise.resolve(fun(...args)).then(resolve)
        }, time)
    })
}

async function delaytest () {
    console.log('start')
    await delay((...args: any) => {
        console.log(...args)
    }, 3000, 'a', 'b', 'c')
    console.log('stop')
}

console.log('delaytest执行')
delaytest()

console.log('delay(xxx)执行')
delay((...args: any) => {
    console.log(...args)
}, 6000, 'aa', 'bb', 'cc')
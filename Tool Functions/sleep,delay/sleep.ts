// sleep即异步代码等待几秒后再执行下一个逻辑
function sleep (t: number = 0) {
    return new Promise((resolve) => setTimeout(resolve, t))
}

// const sleep = (t: number) => new Promise((resolve) => setTimeout(resolve, t))

// 测试test
async function sleeptest () {
    console.log('start')
    await sleep(5000)
    console.log('stop')
}

const promise1 = Promise.resolve('promise1')
const promise2 = new Promise((resolve, reject) => {
    resolve('promise2')
})

const promiseAllTest = () => {
    Promise.all([promise1, promise2 ,sleep(8000)]).then(res => {
        console.log(res)
    })
}

sleeptest()

promiseAllTest()
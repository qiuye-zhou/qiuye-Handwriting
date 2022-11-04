const arr1 = [1, 2, 3, 4]
const arr2 = [1, 3, 5, 6, 7]

function Union () {
    const args = [].slice.call(arguments)
    const arrs = args.reduce((total,current) => {
        return total.concat(current)
    },[])
    return [...new Set(arrs)]
}
console.log('------')
// 返回传入所有数组的并集
console.log(Union(arr1, arr2))

function intersections () {
    let res
    const args = [].slice.call(arguments).map(e => new Set(e))
    args.slice(1).forEach(e => {
        res = [...new Set([...args[0]].filter(x => e.has(x)))]
    })
    return res
}
console.log('------')
// 返回传入所有数组的交集
console.log(intersections(arr1, arr2, [3]))

function subtraction () {
    const result = []
    let res = []
    const args = [].slice.call(arguments).map(e => new Set(e))
    args.forEach((e, ei) => {
        res = []
        args.forEach((x, xi) => {
            if (ei !== xi) {
                res.push([...new Set([...e].filter(y => !x.has(y)))])
            }
        })
        result.push(res)
    })
    return result
}
console.log('------')
// 返回传入的所有数组相对于其他数组的差集
console.log(subtraction(arr1, arr2, [9, 10, 11]))
function compose () {
    let args = [].slice.call(arguments)

    return function (num) {
        return args.reduceRight(function (total, current) {
            console.log(total, current)

            return current(total)
        }, num)
    }
}

let add = x => x + 1
let ride = x => x*2

// console.log(ride(add(2)))

let compose1 = compose(ride, add)

console.log(compose1, compose1(2))

// es6
const composees6 = (...args) => {
    return (num) => {
        return args.reduceRight((total, current) => {

            console.log(total, current)

            return current(total)
        }, num)
    }
}

const composees6Cs = composees6(ride, add)

console.log(composees6Cs, composees6Cs(2))

// pipe 即compose的从左往右的执行的
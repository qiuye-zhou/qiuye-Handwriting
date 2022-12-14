## 工具函数(Tool Functions)

###### once
创建一个只能调用func一次的函数，并记忆执行的结果，后面重复调用只会返回第一次执行的结果，不会再执行

```ts
const init = new Once()
init.once(func)
```

###### sleep/delay
sleep函数既是面试中常问到的一道代码题，也是日常工作，特别是测试中常用的一个工具函数。
即异步代码等待几秒后再执行下一个逻辑，即阻塞异步代码几秒

delay函数即几秒之后执行具体的方法，执行结束之后，再执行下一个逻辑

###### debounce/throttle
防抖(debounce)
触发高频事件后n秒内只会执行一次，如果n秒内高频事件再次触发，则重新计算时间(防抖重在清零)
单位时间内事件触发会被重置,避免事件被误伤触发多次

节流(throttle)
高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率(节流重在加锁---限制执行之间的时间间隔)
控制流量，单位时间内事件只能触发一次

###### compose/pipe
compose将需要嵌套执行的函数平铺嵌套执行指的是一个函数的返回值将作为另一个函数的参数
实现函数式编程中的 Pointfree,使我们专注于转换而不是数据（Pointfree 不使用所有处理的值，只合成运算过程，即我们所指的无参数分割）

pipe与compose类似，只不过从左往右执行
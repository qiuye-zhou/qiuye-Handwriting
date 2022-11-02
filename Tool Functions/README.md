## 工具函数(Tool Functions)

###### once
创建一个只能调用func一次的函数，并记忆执行的结果，后面重复调用只会返回第一次执行的结果，不会再执行

```ts
const init = new Once()
init.once(func)
```


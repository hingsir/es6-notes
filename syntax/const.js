// const是js的一个保留字，在其他语言比如c++,java中表示常量，es5可以用以下方式模拟
Object.defineProperty(typeof global === "object" ? global : window, "MIN", {
    value: 1,
    enumerable: true,
    writable: false,
    configurable: false
})
MIN = 0 //不生效
console.log(MIN) //=> 1

//es6中，可以直接用const声明一个常量，并且声明时需指定值
const MAX = 100
MAX = 99 //不生效
console.log(MAX) //=> 100

//常量对象不可进行赋值操作，但更改其属性
const user = {
    name: 'hingsir'
}
user = {
    name: 'chexingyou'
}//不生效
console.log(user) //=> {name: 'hingsir'}
//常量数组不可进行赋值，但可更改其元素
const arr = [1,2,3]
arr.push(4)
console.log(arr) //=> [1,2,3,4]
arr.unshift(0)
console.log(arr) //=> [0,1,2,3,4]
arr.splice(0,3)
console.log(arr) //=> [3,4]
arr = [1] //不生效
console.log(arr) //=> [3,4]

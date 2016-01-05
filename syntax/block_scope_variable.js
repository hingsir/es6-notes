//在es5之前,js中并没有块级作用域的概念。
{
    var a = 'a'
}
if(false){
    var b = 'b'
}
//由于变量声明提升，在{}块之外也可访问到a，b
console.log(a) //=> a
console.log(b) //=> undefined
//但可以利用IIFE(immediately invoked function expression)模拟
{
    (function(){
        var c = 'c'
    })()
}
//console.log(c) //=> ReferenceError: c is not defined

//在es6中，可以用let声明一个块级作用域的变量

{
    'use strict'
    let d = 'd'
}
console.log(d) //=> ReferenceError: d is not defined
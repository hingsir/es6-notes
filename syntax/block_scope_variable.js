'use strict'
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
    let d = 'd'
}
//console.log(d) //=> ReferenceError: d is not defined

//下面是个经典的例子,funcs[0]并没有按预想的打印出0，而是5
var funcs = []
for(var i = 0; i < 5; i++){
	funcs[i] = function(){
		console.log(i);
	}
}
funcs[0]() //=> 5;
//es5实现，利用闭包保存方法定义时候的作用域
funcs = []
for(var i = 0; i < 5; i++){
	funcs[i] = (function(i){
		return function(){
			console.log(i)
		}
	})(i)
}
funcs[0]() //=> 0
//es6中，可利用let轻易实现 
funcs = []
for(let i = 0; i < 5; i++){
	funcs[i] = function(){
		console.log(i)
	}
}
funcs[0]() //=> 0 
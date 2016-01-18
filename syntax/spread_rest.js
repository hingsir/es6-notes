'use strict'
// ‘...’操作符。在java中可变参数可用...args表示，es6中也引入了这一特性
function func(...args){
	console.log(args)
}
func(1) // => [1]
func(1,'2',true,[3]) //=>[1,'2',true,[3]]

//es5中，可利用arguments获取
function func2(){
	var args = [].slice.apply(arguments)
	console.log(args)
}
func2(1) // => [1]
func2(1,'2',true,[3]) //=>[1,'2',true,[3]]
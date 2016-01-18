'use strict'
//在es5中，设置默认值，类似下面的代码很常见，
function foo(x,y) {
    x = x || 0
    y = y || 1
    console.log(x ,y)
}

foo() //=> 0,1
foo(5, 6) // => 5,6
foo(5) //=> 5,1
foo(null, 6); //=> 0,6

//在es6中，可就好办多了
function bar(x=11,y=31){
	console.log(x,y)
}
bar() //=> 0,1
bar(5, 6) // => 5,6
bar(5) //=> 5,1
bar(null, 6); //=> null,6
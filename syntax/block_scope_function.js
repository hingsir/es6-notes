//严格模式下 function a 为块级funciton
'use strict'
{
    function a(){
        console.log('a called')
    }
    var b = function(){
        console.log('b called')
    }
    let c = function(){
        console.log('c called')
    }
}
//console.log(a()) //=> ReferenceError: b is not defined
console.log(b()) //=> b called
//console.log(c()) //=> ReferenceError: c is not defined
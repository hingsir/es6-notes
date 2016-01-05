
{
    function a(){
        console.log('a called')
    }
}
console.log(a()) //=> b called

if(false){
    function c(){
        console.log('c called')
    }
    var d = function(){
        console.log('d called')
    }
}
console.log(c()) // c called

//console.log(d()) //=> TypeError: undefined is not function
{
    (function(){
        var e = function(){
            console.log('e called')
        }
    })()
}
//console.log(e) //=> ReferenceError: c is not defined
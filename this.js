console.log('Logging the window object')
console.log(this) //window object

console.log('<--------------------->\n Logging this from an object method call:\n')
let ob = {name: 'jermod', logThis: function(){(function(){console.log(this.name)}.bind(this))()}}
ob.logThis() // Logs the object

console.log('<----------------->\nLogging the window object from inside a function by calling it normally:')

function Human(a,b,c) {
  this.fff = 'fff'
  console.log(this) // prints window object unless...nvm the "unless"
  console.log(a)
  console.log(b)
  console.log(c)
}

Human(5,6,7)

console.log('\n<------------------------->\nFunction.call:\n')
var someAr = [1,2,4]
Human.call(ob, someAr[0], someAr[1], someAr[2])


console.log('\n<------------------------->\nFunction.call set to a variable:\n')
someAr = ['car', 'taco','heli']
newFn = Human.call(ob, someAr[0], someAr[1], someAr[2])

// newFn() // newFn is not a function...
newFn // Correct Syntax

console.log('\n<---------------------------->\nFunction.apply:\n')
Human.apply(ob, someAr) // don't need to split vars


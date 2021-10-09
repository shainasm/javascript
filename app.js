// // function is a block of code which performs a specific function. parameters are the values which may or may not be passed to a function

// function greet(Name='john',age=99) {
//   console.log(Name, age)
//   // console.log('hey '+ Name + '!! your age is '+ age)
//   // console.log('Hello')
// }

// // calling function:-

// greet()

//function declaration:- 

// function add(a, b) {
//   var sum = a + b
//   return sum
// }

// function expression:- (most prefferable)
var add = function(a=0 , b=0){
  var sum = a + b
  return sum
}

console.log(add(10,20))

// example for practise
// var func = function(Name='john', age=99){
//   var greet = Name + age
//   return greet
// }

// console.log(func('shaina ', 19))

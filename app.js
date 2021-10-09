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
var add = (a=0 , b=0) => {
  var sum = a + b
  return sum
}

console.log(add(10,20))



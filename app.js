// var arr=['go to the gym','cook oatmeal','eat']

// arr.push('sleep')
// // for(var i=0; i < arr.length; i++) {
// //   console.log(arr[i])
// // }

// // var callbackFunction = (element , index) => {
// //   console.log(element , index)
// // }

// // another way of callback function
// arr.forEach((element , index) => {
//   console.log(element , index)
// })

var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')

const callbackFunc= (event) => {
  // console.log(input.value)
  const inputValue = input.value
  const element = document.createElement('li')
  const textNode = document.createTextNode(inputValue)
  element.appendChild(textNode)
  list.appendChild(element)
}

button.addEventListener('click',callbackFunc)
// selection of elements from the html document
const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]
const add = document.querySelector('#add')
const subtract = document.querySelector('#subtract')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')
const resultBox = document.querySelector('.result')

// // function add 
// const sum = () => {
//   const result = parseInt(a.value) + parseInt(b.value)
//   // parseit converts a string into an integer
//   console.log(result)
//   resultBox.innerHTML = result
// }

// // function multiply 
// const product = () => {
//   const result = parseInt(a.value) * parseInt(b.value)
//   console.log(result)
//   resultBox.innerHTML = result
// }

const calculate = (event, operation) => {
  // console.log(event.target)
  // if (operation=='add') {
  //   console.log('adding')
  // } else if (operation=='multiply') {
  //   console.log('multiplying')
  // }

  switch(operation) {
    case "add":
      resultBox.innerHTML = parseInt(a.value) + parseInt(b.value)
      break
    case "subtract":
      resultBox.innerHTML = parseInt(a.value) - parseInt(b.value)
      break
    case "multiply":
      resultBox.innerHTML = parseInt(a.value) * parseInt(b.value)
      break
    case "divide":
      resultBox.innerHTML = parseInt(a.value) / parseInt(b.value)
      break
    default:
      resultBox.innerHTML = "Not a valid operation"
  }
}

add.addEventListener('click', (event) => calculate(event,'add'))

subtract.addEventListener('click', (event) => calculate(event,'subtract'))

multiply.addEventListener('click', (event) => calculate(event,'multiply'))

divide.addEventListener('click', (event) => calculate(event,'divide'))
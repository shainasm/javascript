var button = document.querySelector('button')
var body = document.querySelector('body')

const callbackFunc= (event) => {
 body.classList.toggle('dark')
}

button.addEventListener('click',callbackFunc)
var heading = document.getElementById('heading')
var body = document.querySelector('body')

heading.innerHTML = "I was added by js"
heading.style = "color:red;font-size:2rem"

heading.classList.add('five')
heading.classList.remove('one')

body.classList.add('dark')

// .add to add a class to an element
// .remove to remove a class from an element
// classlist shows the list of classes the element  has.
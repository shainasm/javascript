var heading = document.getElementById('heading')
var para = document.getElementsByClassName('para')
console.log( 'by get method',para)

// get elements by class name method gives the data in the form of an array

// an query selector gives the particular element individually

// query selector is used to select an element. it accepts a css selector....eg to select an element of id para:- var query =document.queryselctor('#para')


var para = document.querySelector('.para')
console.log('by query selector;', para)

var query = document.querySelector('h1')

console.log(query)

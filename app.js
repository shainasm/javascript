var list = document.querySelector('ul')
// this selected the ul from th html document 

var arr = ['Go to the gym','Cook oatmeal','Eat']

arr.push('complete the assignment')

console.log( 'length of the array:', arr.length)

for (var i = 0; i < arr.length; i++) {
  var element = document.createElement('li')
// this created an li element in the html code
  
  var textNode = document.createTextNode(arr[i])
// this created a textnode which contains the elements of the arr 

  element.appendChild(textNode)
// appendchild adds the textnode according to the for loop and displays it

  list.appendChild(element)
//this lists up the iteration on the o/p screen 
}
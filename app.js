// unshift add the element to the beggining of the array
// push adds the element to the end of the array
// shift removes the particular element of the array
// slice cuts the particular range from the array and adds them to a new array with no change in the original array
// splice deletes the particular items from the array

var arr=[1, 2, 3, 4, 5, 6, 7, 8]

var new_arr = arr.filter((element,index) => {
  if(element % 2 === 0) return true
})

// for(var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) new_arr.push(arr[i])
// }

console.log(new_arr)
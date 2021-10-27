// JAVASCRIPT UNDER THE HOOD
// STACK IS A LIFO DATA STRUCTURE I.E LAST IN FIRST OUT 

setTimeout(() => {
  console.log('timer 1')
}, 0);

for (var i = 0; i < 1000; i++) {
 console.log(i)
}
// console log executes first until then settimeout waits in the callback queue, and then it executes after the console log have displayed
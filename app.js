//operators

// arithmetic operators

var a = 2
var b = 10

console.log('a+b=', a+b)
console.log('b-a=', b-a)
console.log('a*b=', a*b)
console.log('a**b=', a**b)
console.log('a/b=', a/b)
console.log('a%b=', a%b)

// assignment operators

console.log('b', b)
b += 10
console.log('b+=10', b)
b++
console.log('b++', b)
b-=10
console.log('b-=10', b)
b--
console.log('b--', b)

var c = 10
console.warn('c++', c++)
console.warn('++c', ++c)

// comparison operator

var d = 20
var e = 22
var f = '20'

console.log(d<e)
console.log(d>e)
console.log(d==e)
console.log(d<=e)
console.log(d>=e)
console.log(d==f)
console.log(d!=f)
console.log(d===f)
console.warn(d+f)

// logical operators

console.log('true&&true', true&&true)
console.log('true&&false', true&&false)
console.log('false&&true',false&&true)
console.log('false&&false', false&&false)

console.log('true||true', true||true)
console.log('true||false', true||false)
console.log('false||true', false||true)
console.log('false||false',false||false)


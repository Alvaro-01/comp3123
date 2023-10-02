//console.log(module)
//globalThis.console.log(global) 
var message = require("./message")
var arith = require("./Arithmatic")
var {sum,Student} = require("./Arithmatic")
var Emp = require("./Employee")
const Employee = require("./Employee")


console.log(arith)
console.log(arith.sum(10,5))
console.log(sum(100,50))
console.log(arith.sub(10,5))
console.log(arith.mul(10,5))

var s1 = new arith.Student(1,"Alvaro")
s1.print()

var e1 = new Employee(2,"Alvaro")
e1.print()

//console.log(welcome)
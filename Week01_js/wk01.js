///'use strict'
console.log("Hello World")

var a = 100
let b = 200
const c = 300

a = "Hello"
//var x;
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(x))

//Objects
var stud = {
    sid: 1,
    fnm: "Pritesh",
    lnm: "Patel",
    result: "PASS",

    display(){
        console.log(this.fnm)
        console.log(this)
    },
    print: () => {
        console.log(this.lnm)
        console.log(this)
    }
}

console.log(typeof(stud))
console.log(stud)
stud.display()
stud.print()

//obj destructure 

var {sid, fnm} =  stud
console.log(sid)
console.log(fnm)

var eid = 100
var efnm = "First Name" 
var elnm = "Last Name"

var emp = {
    eid,
    fnm : efnm,
    lnm : elnm
}

console.log(emp)
const r = "result"
console.log(stud["result"])
//stud.r
console.log(stud[r])
console.log(stud["b date"])

var n = [1,2,3]
var res = n.map(x => x*2 + "I")
console.log(n)
console.log(res)

var res = n.filter(x => x*2 )
console.log(res) 

function display(x){
    return x * 4 
}
var res = n.map(display) 
x = [100,200,300]
z = [n,z,500,600]
z= [...n,...x,500,600]
console.log(z)

function sayHello(){
    console.log(arguments)
    console.log(a)
}
sayHello(1,2,3,"hello","gbc")
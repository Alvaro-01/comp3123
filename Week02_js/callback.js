function add(a,b){
    return a+b
}

function makeCallback(x,y,callback){
    if(x >= y){
        const c = callback(x,y)
        console.log(c)
    }else{
        console.log("a must be >= b")
    }
    
} 

const events = require("events")

var myEmitter = new events.EventEmitter()

//1
myEmitter.on("hi", () => {
    console.log("Hello")
})

myEmitter.emit("hi")
myEmitter.emit("hi")
myEmitter.emit("hi")

//2
var greetMe = (name) => {
    console.log(`Hello, ${name}`)
}

myEmitter.addListener("hello", greetMe)

myEmitter.emit("hello", "Pritesh")
myEmitter.emit("hello", "Pritesh")
myEmitter.emit("hello", "Pritesh")

//3
myEmitter.on("sweet", (name) => {
    console.log(`Sweet, ${name}`)
})

myEmitter.emit("sweet", "Heart")

//Event not exist
myEmitter.emit("goodbye") //Nothing will happen

//4
myEmitter.once("bye", () => {
    console.log("See you next time. Sweet dreams")
})

myEmitter.emit("bye")
myEmitter.emit("bye")

const fs = require("fs")
console.log("****** 1 ******")
fs.readFile("data.txt", (err, data) => {
    console.log(`DATA 1 : ${data.toString()}`)
})
console.log("****** 2 ******")
var data = fs.readFileSync("data.txt")
console.log(`DATA 2 : ${data.toString()}`)
console.log("****** 3 ******")

makeCallback(100,20,add)
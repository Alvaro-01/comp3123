function sayHello(name){
    return `hello, ${name}`
}

let c = sayHello("Alvaro")
console.log(c)

sayHello = (name) =>{
    return `hello, ${name}`
}

sayHello = (name) =>`hello, ${name}`
sayHello = name =>`hello, ${name}`
sayHello = ()=>`hello, Alvaro`
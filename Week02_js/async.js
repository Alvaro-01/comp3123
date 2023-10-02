async function sayHello(name){
    return `Hello, ${name}`
}

var r = sayHello("Alvaro").then(s => {
    console.log(s)
})

async function makePromise(x, y) {
    var p1 = new Promise((resolve, reject) => {
        if( x >= y) {
            resolve({msg: "Fulfilled"})
        }else{
            reject({msg: "Error"})
        }
    })
    return p1
} 
async function makeAPICall(){
    console.log("START")
    try{var result = await makePromise(20,2)
    console.log(`C1: ${JSON.stringify(result)}`)
    var result = await makePromise(10,20)
    console.log(`C2: ${JSON.stringify(result)}`)
    }catch (error){
        console.log("ERROR")
    }
    console.log("END")
}
makeAPICall()
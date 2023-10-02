
//exercise 1
let gretter = (MyArray)=>{
    let greentext = "Hello"
    for(let x of MyArray){
        console.log(`${greentext}  ${x}`)
    }

}
gretter(["Randy Savage",'Rick Flair','Hulk Hogan'])

//exercise 2
let capitalize = (word)=>{
    
    const obj = {...word}
    const {'0':letter} = obj
    let a = word.slice(1).toLowerCase()
   return [letter.toUpperCase(), ...a].join('')
} 
console.log(capitalize("fooBar"))
console.log(capitalize("nodeJs")) 

//exercise 3

const colors = ['red','green','blue'] 
let capitalizeColors = (colors)=>{
    return colors.map(x => 
        x.charAt(0).toUpperCase()+x.slice(1))
    
}
console.log(capitalizeColors(colors))

//exercise 4
var values = [1,60,34,30,20,5]
let filterLessThan20 = values.filter(x => x < 20)
console.log(filterLessThan20)

//exercise 5
var array = [1,2,3,4]

let calculateSum = array.reduce((total , x) => total + x)
let calculateProduct = array.reduce((total , x) => total * x)
console.log(calculateSum)
console.log(calculateProduct)

//Exercise 6

class Car{
   

    constructor (model,year){
        this.model=model
        this.year=year
    }
    details(model,year){
        return `Model ${this.model} Engine ${this.year}`
    }
}
class Sedan extends Car{
    balance = 0
    constructor(model,year,balance){
        super(model,year)
        
        this.balance = balance
    }
    info(){
        return `${this.model} has a balance of ${this.balance}`
    }
}
const car2 = new Car('Pontiac Firebird',1976)
console.log(car2.details())

const sedan = new Sedan('Volvo SD', 2018,30000)
console.log(sedan.info())
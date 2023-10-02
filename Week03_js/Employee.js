module.exports = class Employee{
    constructor(sid,snm){
        this.sid =sid
        this.snm =snm
    }
    print(){
        console.log(this.sid)
        console.log(this.snm)
    }
}

//module.exports = welcome =("Hello")
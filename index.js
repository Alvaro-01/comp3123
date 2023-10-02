var express = require('express')

const SERVER_PORT = 8089
var app = express()
app.use(express.json())
app.unsubscribe(express.urlencoded({extended:true})) 

app.get("/hello", (req, res) => {
   
    res.send("<h1>Hello Express JS</h1>")
    
    //res.end("<h1>Welcome to Express Web Server</h1>")
})

app.get("/user/:fname/:lname", (req, res) => {
   
    const data = req.params
    let fnm = req.params.fname
    let lnm = req.params.lname
    res.send(data)
    
    
})


app.post("/user", (req, res) => {
   
    const data = req.query
    if(data.fname == undefined && data.lname == undefined){
        res.send("Required full name ")
    }else{
         res.send(data)
    }
    
})
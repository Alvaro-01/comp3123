var express = require('express')

const SERVER_PORT = 8089
var app = express()
app.use(express.json())
app.unsubscribe(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.setHeader(
        "Content-Type", "text/play"
    )
    res.status(201).send("<h1>Welcome to Express Web Server</h1>")
    
    
    //res.end("<h1>Welcome to Express Web Server</h1>")
})

app.get("/student", (req, res) => {
    const stud = {
        sid: 1,
        snm: "Alvaro",
        method: "GET"
    }

    res.send(stud)
})

app.post("/student", (req, res) => {
    const stud = {
        sid: 1,
        snm: "Alvaro",
        method: "POST",
        header: req.headers
    }

    res.json(stud)
})

app.get("/faculty",(req,res) =>{
    res.send("hello")
})

//path parameter
//http://localhost:8089/employee/alvaro/aguirre
app.get("/employee/:fname/:lname",(req,res)=>{
    const data = req.params
    let fnm = req.params.fname
    let lnm = req.params.lname
    res.send(data)
})

//query param
//http://localhost:8089/employee?fnm=alvaro&lnm=aguirre
app.get("/employee",(req,res)=>{
    const data = req.query
    if(data.id == undefined){
        res.send("Required Id ")
    }else{
         res.send(data)
    }
   
})
//http://localhost:8089/hotels
app.get("/hotels",(req,res)=>{
    const data = req.body
    res.send(data)
})

app.listen(SERVER_PORT, ()=> {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})
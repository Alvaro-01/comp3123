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
    
    
    
})
//http://localhost:8089/hello
app.get("/hello", (req, res) => {
    
    res.send("Hello Express JS")
})

//path parameter
//http://localhost:8089/user/alvaro/aguirre
app.get("/user/:fname/:lname",(req,res)=>{
    const data = req.params
    let fnm = req.params.fname
    let lnm = req.params.lname
    res.send(data)
})

//query query
//http://localhost:8089/user?fnm=alvaro&lnm=aguirre
app.post("/user",(req,res)=>{
    const data = req.query
    if(data.lnm == undefined && data.fnm == undefined){
        res.send("Required full name ")
    }else{
         res.send(data)
    }
   
})

app.listen(SERVER_PORT, ()=> {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})
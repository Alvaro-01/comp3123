var http = require("http")

//console.log(http)

const SERVER_PORT = 8089

var server = http.createServer((req, res) => {

    console.log(`${req.url} - ${req.method}`)
    
    if(req.url == "/"){
        res.write("<h1>Welcome to Node Server</h1>")
        res.write("<h3>George Brown College</h3>")
    }

    if(req.url == '/login'){
        res.write("<h1>Login Page</h1>")
    }

    if(req.url == '/student'){
        if(req.method == "POST"){
            res.write("<h1>Student Page</h1>")
            const stud = {
                sid: 1,
                snm: "Pritesh Patel"
            }
            res.write(JSON.stringify(stud))
        }else{
            const error = {message: "Error: Use POST method to send the request"}
            res.write(JSON.stringify(error))
        }
    }var http = require("http")

//console.log(http)

const SERVER_PORT = 8089

var server = http.createServer((req, res) => {

    console.log(`${req.url} - ${req.method}`)
    
    if(req.url == "/"){
        res.write("<h1>Welcome to Node Server</h1>")
        res.write("<h3>George Brown College</h3>")
    }

    if(req.url == '/login'){
        res.write("<h1>Login Page</h1>")
    }

    if(req.url == '/student'){
        if(req.method == "POST"){
            res.write("<h1>Student Page</h1>")
            const stud = {
                sid: 1,
                snm: "Pritesh Patel"
            }
            res.write(JSON.stringify(stud))
        }else{
            const error = {message: "Error: Use POST method to send the request"}
            res.write(JSON.stringify(error))
        }
    }
    res.end()
})

server.listen(SERVER_PORT)
console.log(`Server running on http://localhost:${SERVER_PORT}/`)
    res.end()
})
var http = require("http");
var employee = require("./Employee")
//TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8282

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.write(`<h1>Welcome to Lab Exercise 03</h1>`)
        }

        if (req.url === '/employee') {

            //TODO - Display all details for employees in JSON format
            for(x in employee){
                res.write(JSON.stringify(employee[x]))
                
            }
            
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            const names = []
            for(x in employee){
                
                names[x]=(`${employee[x][`firstName`]} ${employee[x]['lastName']}`)
                
            }
            res.write(JSON.stringify(names.sort()))
            
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            var price = 0
            for(x in employee){
                
                price += parseInt(employee[x][`Salary`])
                
            }
            res.write(JSON.stringify(`total price : ${price}`))
            
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
const http = require("http")

const hostname ='localhost';
const port = 3000

const server = http.createServer((req,res) =>{
const {url} = req
if(url === "/transaction"){
    res.write("hello there")
    res.end()
}
    res.end("welcome to ned")
})

server.listen(port , hostname ,() =>{
console.log(`server running ${port}:${hostname}`)
})
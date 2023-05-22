const express = require("express")
const fortunes = require("./data/fortunes")
const bodyParser = require("body-parser")
const port = 9000

const app = express()

app.use(bodyParser.json())
app.get("/fortunes", (req,res) => {
    res.json(fortunes)
})

app.get("/fortunes/random", (req,res) => {
   res.json(fortunes[Math.floor(Math.random() * fortunes.length)])
})

app.get("/fortunes/:id" , (req, res) =>{
    
    const r_fortunes = fortunes.find((fortune) => fortune.id == req.params.id)
    res.send(r_fortunes)

})
app.post("/fortunes",(req, res) =>{
    console.log(req.body)
})
app.listen(port, ()=> console.log(`Listening on port ${port}`))
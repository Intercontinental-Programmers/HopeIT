const PORT = 6969

var express = require("express")
var mongoClient = require("mongodb")
var bodyParser = require("body-parser")

var app = express()

app.use(bodyParser.urlencoded({extended : true}))
app.set("view-engine", "ejs")

var dataBase

mongoClient.connect('mongodb://aditestmucha:testadi@ds237445.mlab.com:37445/hopeit-icp', (err, db) => {
    if(err){
        console.log('Good evening, something went wrong...')
    }

    dataBase = db
    app.listen(PORT, () => {
        console.log("Server is running and established connection with database")
    })

    app.get('/', (req, res) =>{
        res.send('Hello World!')
    })
})
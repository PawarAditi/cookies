//express, cookie-parser
const express = require("express")
const cookierParser = require("cookie-parser")
var port = 3001

//simple cookie
var staff = {
    name : "Ashok",
    age : 30
}

//multiple information
var student = { "student" : [
    {"name" : "Aditi", "age" : 22},
    {"name" : "Yash", "age" : 22},
    {"name" : "Vishal", "age" : 23},
    {"name" : "Amshmita", "age" : 24},
    {"name" : "Akshitha", "age" : 25},
]}

var subjects = { "subjects" : [
    {"name" : "Java"},
    {"name" : "C++"},
    {"name" : "Python"}
   
]}

var exams = {
    name : "Final Year 2022"
}



//creting server
var app = express()

//mounting
app.use(cookierParser())

//route
app.get("/", function(req, res){
    res.send("Welcome to cookie management")
})

app.get("/add", function(req, res){
    //we are going to cookie to the browser
    res.cookie("staff", staff) //cookieName, cookieValue
    res.cookie("student", student) //cookieName, cookieValue
    res.cookie("subject", subjects) //cookieName, cookieValue
    res.cookie("exams", exams)
    res.send("Cookie created for all")
})

app.get("/getall", function(req, res){
    //reading the cookies information from the browser
   
    res.send(req.cookies)

})

app.get("/viewstaff" , function(req,res){
    res.send(req.cookies["staff"])
})

app.get("/viewstudent" , function(req,res){
    res.send(req.cookies["student"])
})
app.get("/deleteexams", function(req, res){
    //delete the cookies from browser
    res.clearCookie("exams")
    res.send("cookie cleared of exams")
})
app.get("/delete/:name", function(req, res){
    //delete the cookies from browser
    var name  = req.params.name 
    res.clearCookie(name)
    res.send("cookie cleared of " + name)
})
app.get("/deleteall", function(req, res){
    //delete the cookies from browser
    res.clearCookie("staff")
    res.clearCookie("student")
    res.clearCookie("subject")
    res.clearCookie("exams")
    res.send("cookie cleared for all")
})

app.listen(port, function(err){
    if(err)
    {
        console.log("Err in starting the server")
        return
    }
    console.log("server started at port : ", port)
})
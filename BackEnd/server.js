const express = require("express");

const app = express();

app.get('/',(req,res)=>{
    res.send('this is working')
})

app.post('/addProject',(req,res)=>{
    res.json('Added')
})


app.listen(3001, () => { 
    console.log('App Is Running On Port 3001')
})

/*
/ --> res = this is working
/add --> POST = project
/edit -->Put = Project
/view/:projectID --> Get = Project
/delete --> Put Project */
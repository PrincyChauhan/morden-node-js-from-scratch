const express = require("express");
const app = express();

app.get('/',(request,response)=>{
    response.json({
        name:"Princy"
    })
})


app.get('/',(request,response)=>{
    response.send({
        name:"Princy"
    })
})

app.listen(3000,()=>{
    console.log("App is listing on port 3000")
})
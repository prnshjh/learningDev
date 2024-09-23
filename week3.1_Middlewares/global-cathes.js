const express=require("express");
const app=express();
app.use(express.json());
app.post("/health-checkup", function(req, res){
    //do something with the kidney here
    const kidney=req.body.kidneys;
    const kidneyLength=kidney.length;
    res.send("your kidney length is " + kidneyLength);
}

);
 app.listen(3000);
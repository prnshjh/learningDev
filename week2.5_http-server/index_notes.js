 //creating a http server
 //express
 //node deg=fault library => no
 //we have to install express => npm install express
 //running the server=> node index.js in terminal
 //req=request, res=response
 //to take input from user => const n=req.query.n; (takes n as input) is called query parameters for get requests
 //to take input from user => const n=req.query.n; (takes n as input) is called query parameters for post requests
 //JSON IS javascript object notation
 //

 //to give input as user  (localhost:portnumber/?n=3)
 






const express= require("express"); //building hospital






 const app=express(); //creating clinic


 function sum(n){
  let ans=0;
  for(let i=1; i<=n; i++){
    ans=ans+i;
  }
return ans;
}





app.get("/", function(req, res){
const n=req.query.n; 
const ans= sum(n);









  //putting the responses in queue
  res.send("hi your ans is "+ans); //sending a response on a request on the server
}
)

 app.listen(3000); //doctor's room

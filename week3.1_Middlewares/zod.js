// ///////////////////////////////////////////////////////////////////
// // Zod is usewd for scchema validation
// // installation=> npm install Zod
// // initialisation => const zod = require ("zod");
// const zod = require ("zod");
// const schema= zod.array(zod.number()); 
// const express = require("express");
// const app = express();
// /*
// {
// email: string => emailaddress
// password: atleast 8 letters
// country "IN", "USA", "UK
// }
// */
// const schema= zod.object{
//     email: zod.string(),
        

// app.use(express.json());
// app.post  ("/health-checkup", function (req, res){
//     const kidneys= req.body.kidneys;

//     const response = schema.safeParse(kidneys)
//     if(!response.success){
//         res.status(411).json({
//             msg: "input is invalid"
//         })
//     }
//     else {
//         res.send({
//             response
//         })
//     }


// }); 
// app.listen(3000);
// //////////////////////////////////////////////////////////////////////



// const zod = require("zod");
// function validateInput(obj) {
//   const schema = zod.object({
//     email: zod.string().email(),
//     password: zod.string().min(8),
//   })
//   const response = schema.safeParse(obj);
//   console.log(response);
// }
// validateInput({
//   email: "tugrp@example.com",
//   password: "12345678",
// });

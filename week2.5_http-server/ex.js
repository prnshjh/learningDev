const express=require("express");
const app=express();

const user=[{
    name: "john",
    kidneys:[{
        healthy:false
    }
    ]

}

];
app.get("/", function(req, res){
    const johnKidneys=user[0].kidneys;
    const numberOfKidneys=johnKidneys.length;
    let numberOfHealthyKidneys=0;
    for(let i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys+=1;
        }
    }
    const numberOfUnealthyKidneys=numberOfKidneys-numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnealthyKidneys

    })

})


app.put("/")
app.listen(3001);
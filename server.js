const express = require("express");
 const app= express();
 const PORT=3000;


 app.get("/:name",(req,res)=>{

const name=req.params.name;
res.json({message:`Welcome To KNAX_250, ${name}!`})
});
 app.listen(PORT,()=>{
console.log(`Server is running on port ${PORT}`);

});



const express =require( "express");
// import user from "./db";
const mainRouter =require("./routes/index");

const app=express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/",mainRouter);



app.listen(3000,()=>{
    console.log(" im working on port 3000");
})

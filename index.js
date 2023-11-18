import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use("*",(req,res)=>{
    res.status(404).send("Page Not Found 404")
})

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})
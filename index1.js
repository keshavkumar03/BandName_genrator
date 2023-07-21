import  Express  from "express";
import bodyParser from "body-parser";
import  {dirname }from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = Express()
const port= 4041;
app.use(bodyParser.urlencoded({extended:true}))
app.use(Express.static(__dirname));
app.use(genrator);
var band=""


function genrator(req,res,next){
    console.log(req.body);
     band= req.body["street"]+ req.body["pet"];
    next();
    console.log(band)
}



app.use(genrator);


app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.use(genrator);


app.post("/submit", (req, res) => {
    res.send(`<h1>Your band name is:</h1><h2>${band}✌️</h2>`);
  }); 

app.listen(port,()=>{
    console.log(`app is running on ${port}`)
})



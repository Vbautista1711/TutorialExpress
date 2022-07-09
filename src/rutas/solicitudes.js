const express= require("express");
const route= express.Router();
const path= require("path");

var options={root:path.join(__dirname,"../vistas")};

route.get("/home", (req,res)=> 
{
    //res.send("peticion solucionada");
    res.sendFile("index.html",options);
});
 

route.get("/git", (req,res)=> 
{
    //res.send("peticion solucionada");
    res.sendFile("git.html",options);
})

route.get("/comandosgit", (req,res)=> 
{
    //res.send("peticion solucionada");
    res.sendFile("coma_git.html",options);
})

route.get("/github", (req,res)=> 
{
    //res.send("peticion solucionada");
    res.sendFile("github.html",options);
})

route.get("/VideoDeGit&Github", (req,res)=> 
{
    //res.send("peticion solucionada");
    res.sendFile("ejem_github.html",options);
})

module.exports=route;
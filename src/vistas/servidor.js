const express=require("express");
const servidor=express();

servidor.set("puerto",3000);

servidor.use(require("../rutas/solicitudes.js"));

servidor.listen(servidor.get("puerto"),()=>
{
    console.log("servidor escucha en el puerto: ",servidor.get("puerto"));
});


servidor.use(express.static(__dirname + '/'))


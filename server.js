const app = require("express")();
const httpServer = require("http").createServer(app);
const options = { /* ... */ };
const io = require("socket.io")(httpServer, options);
const port = process.env.PORT || 3000;

io.on("connection", socket => { 
socket.on("gonder", (data)=>{
    console.log(data);
})

 });
app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});
httpServer.listen(port);
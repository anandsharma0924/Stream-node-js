    const fs = require("fs");

    const http = require("http")

    const server = http.createServer();

    server.on("request", (req,res)=>{
        fs.readFile("index.txt","utf-8", (err, data)=>{
            if(err){
                console.log(err);
                return;

            }
            res.end(data.toString());
        })
    })
    server.listen(5000)

// program for creating the server

let http = require('http')
let fs = require('fs')

http.createServer(function(req, res){

    fs.readFile('login_page.html',function(err, data){

        res.writeHead(200,{'content-type': 'text/html'})
        res.write(data)
  
    })

    fs.readFile('style.css',function(err, data){
        // res.writeHead(200,{'content-type': 'text/css'})
        res.write(data)
        res.end();
    })

}).listen(3000)
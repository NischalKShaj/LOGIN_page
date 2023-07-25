// program for creating the server

let http = require('http')
let fs = require('fs')
let url = require('url')
http.createServer(function(req, res){
    let q = url.parse(req.url, true)
    q.pathname
    if(q.pathname === '/'){
        fs.readFile('login_page.html',function(err, data){

            res.writeHead(200,{'content-type': 'text/html'})
            res.write(data)
            res.end();
        })
        
    }else if(q.pathname === '/home'){
        fs.readFile('home_page.html',(err, data)=>{
            res.writeHead(200,{'content-type': 'text/html'})
            res.write(data)
            res.write('<h1>'+"Hello "+q.query.fname+'<br>'+"welcome to the webpage....."+'</h1>')
            res.end();
            console.log(q.query.fname);
        })
        
    }else{
        res.writeHead(404,{'content-type':'text.html'})
        res.write("404 not found")
        res.end()
    }
}).listen(4000, function(){
    console.log("Server started.....");
})
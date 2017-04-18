let http = require('http')
let fs = require('fs');
var url
global.globalCount = 0;

// let pages = ["homepage.js", "homepage.html", "homepage.css", "DOMcar.html", "DOMcar.css", "DOMcar.js", "favicon.ico"]
// ]

let server = http.createServer(function(request, response){
  console.log(globalCount);
  url = request.url.slice(1, request.url.length)
  response.writeHead(200, {'Content-Type': 'text/html'})
  console.log(request.url)
  if (url == ""){
    fs.readFile('html/homepage.html','ascii', function (err, data){
      if(err){
        page = "<h1>Error</h1>"
      }else{
        page = data
      }
      response.end(page)
    });
  }
  else {
    fs.readFile(url,'ascii', function (err, data){
      if(err){
        page = "<h1>Error</h1>"
      }else{
        page = data
      }
      response.end(page)
    });
  }
})


server.listen(3000, '0.0.0.0', function(){
  console.log('HTTP Server Started')
})

const app = require('http').createServer(response);
const fs = require('fs');

app.listen(3030);
console.log("App is running on port 3030...");

function response(req, res){
    let file = ""
    if(req.url == "/"){
      file = __dirname + '/index.html';
    } else {
      file = __dirname + req.url;
    }
    fs.readFile(file, (err, data) => {
        if (err){
          res.writeHead(404);
          return res.end('Page not Found');
        }
        res.writeHead(200);
        res.end(data);
    });
  }
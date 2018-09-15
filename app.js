const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http);


http.listen(3030);
console.log("App is running in the port 3030...")

// function response(req, res){
//     let file = ""
//     console.log(req.url)
//     if(req.url == "/"){
//       file = __dirname + '/index.html';
//     } else if(req.url=='/change'){
//         console.log(req);
//         return res.end('batata');
//     }
//      else {
//       file = __dirname + req.url;
//     }
//     fs.readFile(file, (err, data) => {
//         if (err){
//           res.writeHead(404);
//           return res.end('Page not Found');
//         }
//         res.writeHead(200);
//         res.end(data);
//     });
//   }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


app.get('/', (req, res)=>{
  res.redirect('/index');
});

app.get('/index', (req, res)=>{
  res.sendFile(__dirname + '/index.html');
});   
let nomeUs;
app.post('/change', (req, res)=>{
  nomeUs = req.body.name;
  setTimeout(()=>{console.log('teste')},2000);
  //res.send('batata');
});


io.on("connection", (socket) => {
  io.emit('chat message', 'Olá '+ nomeUs + "! No que podemos te ajudar?");

  socket.on("send message", (sent_msg, callback) => {
      sent_msg = "[" + getCurrentDate() + "]: "+ nomeUs + '-' + sent_msg;
      io.sockets.emit("update messages", sent_msg);
      callback();
  });

  socket.on('disconnect', function() {
        io.emit('chat message', 'some user disconnected');
    });
});
function getCurrentDate() {
    const currentDate = new Date();
    const hour = (currentDate.getHours() < 10 ? '0' : '') + currentDate.getHours();
    const minute = (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes();
    return  hour + ":" + minute;
}
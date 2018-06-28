var express = require("express");
//console.log("Let's find out what express is", express);
var bodyParser = require('body-parser');
// use it!

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views'); 
app.use(express.static(__dirname + "/static"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
const server = app.listen(8000);
const io = require('socket.io')(server);
app.get("/", function (request, response){
   console.log("HERE")
    response.render('index.ejs');

})
io.sockets.on('connection', function (socket){
        socket.on("bpush", function (data){
            console.log(data)
            io.emit('bpush_response',{data});
        })
  
})
module.exports = function Route(app, server){
	//this gets the socket io module 
	var io = require('socket.io').listen(server)
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index.ejs");
	});
var messages = [];
                                          
io.sockets.on('connection', function (socket){
        socket.on("new_user_alert", function (data){
         
           console.log("NEWUSEREVENT", data); 
           //render("chatboard.ejs")
            var data = { current_user: data.name, messages: messages };
            console.log("MESSAGES", messages)
            //this is our broadcast, only emit back to client that envoked this event.
            socket.emit('populate_messages', data);
        })
  
        socket.on("chat_text_entered", function (data){
          //push new text onto messages[] array
           messages.push({ name: data.user, message: data.message }); 
           console.log(messages)
           //emit back to all clients.
           io.emit('show_new_text', { new_message: data.message, user: data.user });
        })
    })




};
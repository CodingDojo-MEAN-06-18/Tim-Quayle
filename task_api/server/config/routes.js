
const  task = require('../controllers/tasks.js')

module.exports = function(app) {
app.get('/tasks', function(req, res) {
   task.gettasks(req,res);
  })

app.get('/tasks/:task', function(req, res) {
  task.getonetask(req,res);

})
app.post('/tasks/:task', function(req, res) {
   task.newtask(req,res);
  })
app.put('/tasks/:task/:complete', function(req, res) {
  task.updatetask(req,res);

})
app.delete('/tasks/:task', function(req, res) {
  task.deletetask(req,res);
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
                                };
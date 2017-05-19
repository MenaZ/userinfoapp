//Create a Node.js application that is the beginning of a user management system. Your users are all saved in a "users.json" file, and you can currently do the following:
//search for users
//add new new users to your users file.
//Part 0 Create one route:
//route 1: renders a page that displays all your users.

const app = require ('express')();
const fs = require('fs');
const bodyParser = require ('body-parser')();

app.set('views', 'folder')
app.set('view engine', 'pug')
app.use('/', bodyParser)

app.get('/', function(request,response){
	response.render('index')

fs.readFile('users.json','utf8',(err,data) => {

	if (err) {
		throw err
		console.log('there has occured an error:' + err);
	 }
	 var usernames = JSON.parse(data);

});

})

var listener = app.listen(3000,()=> {
		console.log('the server is starting at port:' + listener.address().port)
})
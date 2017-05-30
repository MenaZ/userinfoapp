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

app.get('/', (request,response) => { //ALSO CALLBACK

fs.readFile('users.json','utf8',(err,data) => {//CALLBACK

	if (err) {
		throw err
		console.log('there has occured an error:' + err);
	 }
	 var usernames = JSON.parse(data);
	 response.render('index', { users:usernames })

	});

})

var listener = app.listen(3000,()=> {
		console.log('the server is starting at port:' + listener.address().port)
})

// route 2
app.get('/search',(request, response)=> {
	response.render('form')
})
//route 3
app.post('/search', (request, response)=>{
	response.render('match')

})

//route 4
app.get('/add',(request, response)=>{
	response.render('add')
})

//route 5
app.post('/add', (request,response)=>{
	fs.readFile('users.json','utf8',(err,data) => {//CALLBACK

	if (err) {
		throw err
		console.log('there has occured an error:' + err);
	 }
	 var usernames = JSON.parse(data);

 	console.log(request.body.firstname +  " " + request.body.lastname +" " + request.body.email)

 	var newUser = { 
 		firstname: request.body.firstname, 
 	    lastname: request.body.lastname,
 	    email: request.body.email 
 	}

  usernames.unshift(newUser)

  var myJSON = JSON.stringify(usernames);

   fs.writeFile('users.json', myJSON,'utf8',(err) => {
  if (err) throw err;
  console.log('The user list has been updated!'); 
  });

	})

  response.redirect('/');
});

//Part 1
// create two more routes:
//- route 2: renders a page that displays a form which is your search bar.
//- route 3: takes in the post request from your form, 
//then displays matching users on a new page. Users should be matched based on 
//whether either their first or last name contains the input string.

//Part 2 Create two more routes:
//- route 4: renders a page with three forms on it (first name, last name, and email) that allows you to add new users to the users.json file.
//route 5: takes in the post request from the 'create user' form, then adds the user to the users.json file. 
//Once that is complete, redirects to the route that displays all your users (from part 0).
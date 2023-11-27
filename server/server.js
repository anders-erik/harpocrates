

// Author: Anders Eriksson
// Date: 2023-08-02
//
// Start server command:
// nohup node server.js >> server.log &


const express = require('express');
//const bodyParser = require('body-parser');

const app = express();
const port = 8674; // Replace with the port you want to run the server on


// CONNECT DATABASE
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'harpocrates',
  password: 'harpocrates123',
  database: 'harpocratesDB'
});


// START SERVER
app.listen(port, () => {
	console.log("");
	console.log(`Server is running on port ${port}`);
	console.log(`Start-time: ` + (new Date(Date.now())).toString());
	console.log("");
});


// GET available chats
app.get('/chats', (req, res) => {
	console.log("Chats request recieved!")

	connection.query(

		'SELECT * FROM chats',
		function (err, results, fields) {
			//console.log(results); // results contains rows returned by server
			//console.log(fields); // fields contains extra meta data about results, if available

			res.send(results);

			//connection.end();
		}
	);
	
});


// GET messages for a specific
app.get('/messages', (req, res) => {
	console.log("Message request recieved!")

	connection.query(

		'SELECT * FROM messages',
		function (err, results, fields) {
			//console.log(results); // results contains rows returned by server
			//console.log(fields); // fields contains extra meta data about results, if available

			res.send(results);

			//connection.end();
		}
	);
	
});









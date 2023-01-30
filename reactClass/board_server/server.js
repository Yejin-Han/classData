const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql2');

const db = mysql.createConnection({
	host: "localhost",
  user: "root",
	password: "Yjbh326*",
	database: "test"
})

app.get("/", (req, res)=>{
	const sqlQuery="SELECT * FROM test.webboard;"
	db.query(sqlQuery, (err, data)=>{
		if(err) return res.json(err);
		return res.json(data);
	})
})
//app.use(express, json());

app.listen(8080, function(){
	console.log('listening on 8080');
});
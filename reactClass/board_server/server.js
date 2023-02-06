const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

/* app.use(express.static(path.join(__dirname, '/board/build')));
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, '/board/build/index.html'));
}); */

const db = mysql.createConnection({
	host: "localhost",
  user: "root",
	password: "Yjbh326*",
	database: "test"
})

app.get("/board", (req, res) => {
	const sqlQuery="SELECT * FROM test.webboard";
	db.query(sqlQuery, (err, data) => {
		if(err) return res.json(err);
		return res.json(data);
	});
});

app.post("/board", (req, res) => {
	const sqlQuery = "INSERT INTO webboard(`title`, `author`, `date`) VALUES (?)";
	const values = [
		req.body.title,
		req.body.author,
		req.body.date,
	];
	db.query(sqlQuery, [values], (err, data) => {
		if(err) return res.send(err);
		return res.json(data);
	});
});

app.put("/board/:id", (req, res) => {
	const boardId = req.params.id;
	const sqlQuery = "UPDATE webboard SET `title` = ?, `author` = ?, `date` = ? WHERE id = ?";
	const values = [
		req.body.title,
		req.body.author,
		req.body.date,
	];
	db.query(sqlQuery, [...values, boardId], (err, data) => {
		if(err) return res.send(err);
		return res.json(data);
	});
});

app.delete("/board/:id", (req, res) => {
	const boardId = req.params.id;
	const sqlQuery = "DELETE FROM webboard WHERE id = ?";
	db.query(sqlQuery, [boardId], (err, data) => {
		if(err) return res.send(err);
		return res.json(data);
	});
});

app.get("/board/:id", (req, res) => {
	const sqlQuery="SELECT * FROM webboard WHERE id = ?";
	const params = req.params.id;
	db.query(sqlQuery, params, (err, data) => {
		if(err) return res.json(err);
		return res.json(data);
	});
});

app.listen(8080, function(){
	console.log('listening on 8080');
});
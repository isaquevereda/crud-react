const express = require("express");
const path = require("path");
const mysql = require("mysql");
const cors = require("cors");
const app = express(),
    port = 3001;

const db = mysql.createPool({
    host: "localhost",
    port: "3305",
    user: "root",
    password: "",
    database: "remessas",
});

const tabela = 'usuario';

app.use(cors());
app.use(express.json());

app.post("/api/users", (req, res) => {
    const { nome } = req.body;
    const { sobrenome } = req.body;
    const { email } = req.body;

    let SQL = `INSERT INTO ${tabela} (nome, sobrenome, email) VALUES (?, ?, ?)`;

    db.query(SQL, [nome, sobrenome, email], (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.get("/api/users", (req, res) => {
    
    let SQL = `SELECT * FROM ${tabela}`;

    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.get("/api/users/:id", (req, res) => {
    const {id} = req.params;

    let SQL = `SELECT * FROM ${tabela} WHERE id = ?`;

    db.query(SQL, [id], (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
})

app.put("/api/users/:id", (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    const { sobrenome } = req.body;
    const { email } = req.body;

    let SQL = `UPDATE ${tabela} SET nome = ?, sobrenome = ?, email = ? WHERE id = ?`;

    db.query(SQL, [nome, sobrenome, email, id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.delete("/api/users/:id", (req, res) => {
    const {id} = req.params;

    let SQL = `DELETE FROM ${tabela} WHERE id = ?`;

    db.query(SQL, [id] ,(err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});


app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

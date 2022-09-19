const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'alabIETI0074',
    database: 'Covid19',
    insecureAuth: true,
    multipleStatements: true

});

app.post('/create', (req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;

    db.query(
        "INSERT INTO credential (email, pass) VALUES (?,?)",
        [email, pass],
        (err, result) => {
            console.log(err);
        }
    );
}
);
app.listen(3001, () => {
    console.log("running on port 3001");
}
);
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM credential WHERE id = ?", id, (err, result) => {
        if (err) console.log(err);
    });
}
);
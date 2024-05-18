const express = require('express');
const app = express();
const users = require('./MOCK_DATA.json');
const fs = require('fs');
app.use(express.urlencoded({ extended: false })); //Middleware


app.route('/api/users')
    .get((req, res) => {
        return res.json(users);
    })
    .post((req, res) => {
        const body = req.body;
        users.push({ ...body, id: users.length + 1 });
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
            return res.json({ statuse: 'Sucess', id: users.length });
        });
    });
app
    .route('/api/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id == id);
        return res.json(user);
    })

app.listen('3000');
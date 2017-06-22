/* globals require __dirname */

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const data = require('./data')();
const path = require('path');
const morgan = require('morgan');

let app = express();
app.use('/public', express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev', {}));

router
    .get('/api/get-all-players', (req, res) => {
        const skip = +req.query.skip;
        const take = +req.query.take;
        const sortQuery = !req.query.sort ? null : req.query.sort[0].field;
        const sortOrder = !req.query.sort ? null : req.query.sort[0].dir;

        const players = data.getAllPlayers(skip, take, sortQuery, sortOrder);
        return res.status(200).json(players);
    })
    .post('/api/create-new-player', (req, res) => {
        const player = data.addNewPlayer(req.body);
        return res.status(201).json(player);
    })
    .put('/api/edit-player', (req, res) => {     
        const player = req.body;
        data.editPlayer(player);
        return res.status(200).json({});
    })
    .delete('/api/delete-player', (req, res) => {
        const playerId = req.body.id;
        data.removePlayer(playerId);
        return res.status(200).json({});
    })
    .get('*', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/../client/index.html'));
    });

app.use(router);

app.listen(4200, () => console.log('Server now up and running at http://localhost:4200'));
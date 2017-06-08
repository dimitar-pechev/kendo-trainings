/* globals require module __dirname */

const router = require('express').Router();
const path = require('path');
const data = require('./data');

router
    .get('/get-all-teams', (req, res) => {
        const take = +req.query.take;
        const skip = +req.query.skip;
        const sortQuery = req.query.sort || null;
        const sortOrder = req.query.order || null;

        const teams = data.getAllTeams(take, skip, sortQuery, sortOrder);
        return res.status(200).json(teams);
    })
    .put('/edit-team', (req, res) => {
        const team = req.body;
        data.editTeam(team);
        return res.status(200).json(team);
    })
    .post('/create-team', (req, res) => {
        const team = req.body;
        const newTeam = data.addNewTeam(team);
        return res.status(201).json(newTeam);
    })
    .delete('/delete-team/:id', (req, res) => {
        const teamId = req.params.id;
        data.deleteTeam(teamId);
        return res.status(200).json();
    })
    .get('*', (req, res) => {
        return res.send(path.join(__dirname, '/../dist/index.html'));
    });

module.exports = router;
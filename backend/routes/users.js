const express = require('express')
const usersRouter = express.Router()

const User = require('../models/User')

usersRouter.post("/", (req, res) => {
    User.create(req.body)
    .then((user) => res.json({msg : 'User created successfully'}))
    .catch((err) => {
        return res.status(400).json({error: `Unable to create user ${err}`})})
})
module.exports = usersRouter
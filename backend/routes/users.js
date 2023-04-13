const express = require('express')
const usersRouter = express.Router()

const User = require('../models/User')

usersRouter.post("/", (req, res) => {
    console.log(req.body)
    User.create(req.body)
    .then((user) => res.json({msg : 'User created successfully'}))
    .catch((err) => {
        console.log(err)
        return res.status(400).json({error: `Unable to create user ${err}`})})
})
module.exports = usersRouter
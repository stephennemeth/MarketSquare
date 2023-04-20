const express = require('express')
const bcrypt = require('bcryptjs')
const usersRouter = express.Router()

const User = require('../models/User')

usersRouter.post("/", async (req, res) => {
    try {

        const hashedPassword = await bcrypt.hash(req.body.password, 8)

        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            number: req.body.number,
            username: req.body.username,
            password: hashedPassword
        })

        newUser.save()

        return res.status(201).json({msg: "User successfully created"})

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
})

usersRouter.put('/login', async (req, res) => {
    try {
        const username = req.body.username
        const user = await User.findOne({username})
        if (!user || user === null) { 
            return res.status(401)
        }   

        const hashedPassword = await bcrypt.hash(req.body.password, 8)
        const same = await bcrypt.compare(hashedPassword, user.password)

        if (same) {
            return res.status(200).json({msg: "success"})
        } else {
            return res.status(402).json({msg: "password is incorrect"})
        }
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
})

module.exports = usersRouter
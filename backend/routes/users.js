const express = require('express')
const bcrypt = require('bcryptjs')
const usersRouter = express.Router()
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
const User = require('../models/User')
const mongoose = require('mongoose')

usersRouter.get("/:id", auth, async (req, res) => {
    try {
        const id = new mongoose.Types.ObjectId(req.params.id)
        console.log(id)
        const user = await User.findById(id)
        return res.json({
            id: user.id,
            firstName : user.firstName
        })
    } catch (error) {
        console.log(error.message)
        return res.json(false)
    }
})

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

        const exists = await User.findOne({username : req.body.username})
        if (exists) {
            return res.status(401).json({status : 1})
        }

        const emailExists = await User.findOne({email : req.body.email})
        
        if (emailExists) {
            return res.status(401).json({status : 2})
        }

        const createResponse = await User.create(newUser)
        const token = jwt.sign({id : createResponse._id}, "passwordKey")
        return res.status(201).json({msg: "User successfully created", token, createResponse})

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
})

usersRouter.post('/login', async (req, res) => {
    try {
        const username = req.body.username
        const user = await User.findOne({username})
        if (!user || user === null) { 
            return res.status(400).json({status : 1})
        }   
        const same = await bcrypt.compare(req.body.password, user.password)
        
        if (same) {
            const token = jwt.sign({id : user._id}, "passwordKey")
            return res.status(200).json({msg: "success", name: user.firstName, token, id : user._id})
        } else {
            return res.status(400).json({status : 2})
        }
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
})

usersRouter.post("/checkToken", (req, res) => {
    try {
        token = req.header("token")
        if (!token) {
            return res.json(false)
        }

        const verified = jwt.verify(token, "passwordKey")

        if (!verified) {
            return res.json(false)
        }

        return res.json(true)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error : error.message })
    }
})

module.exports = usersRouter
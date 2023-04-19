const express = require('express');
const app = express(); 
const port = process.env.PORT || 8082;

const mongoose = require('mongoose')
const cors = require('cors')
const usersRouter = require('./routes/users');
const shopItemsRouter = require('./routes/shopItems');


app.use(cors({ origin: true, credentials: true}))

app.use(express.json({ extended: false}));
app.get('/', (req, res) => res.send('Hello world!'));
app.use('/api/users', usersRouter)
app.use('/api/items', shopItemsRouter)


// Connect to Database
const conn_str = 'mongodb+srv://stephennemeth4:mongoweb4300@cluster0.cazkobe.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', false);
mongoose.connect(conn_str, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => {
    app.listen(port)
    console.log('MongoDB Connection Suceeded...')
})
.catch(err => {
    console.log(`Error in DB connection ${err}`);
})
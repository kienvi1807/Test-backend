require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const Movie = require('./Movie')
app.use(cors())

const db = require('./db')

db.connect()

app.get('/', (req, res, next) => {
    Movie.find({})
        .then(movie => {
            res.json(movie)
        })
        .catch(next)
})

app.listen(port, () => {
    console.log(`App listening http://localhost:${port}`)
})
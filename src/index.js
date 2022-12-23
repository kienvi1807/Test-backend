require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.json({message: 'oke'})
})

app.listen(port, () => {
    console.log(`App listening http://localhost:${port}`)
})
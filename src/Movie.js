const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema({
    name: {
        type: String, required: true
    },
    description: {
        type: String
    },
    videoId: {type: String},
    image: {type: String},
    studio: {type: String}
}, {
    timestamps: true
})

module.exports = mongoose.model('movies', Movie)
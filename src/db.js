const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

async function connect () {
    try {
        await mongoose.connect(`mongodb+srv://kien2899:1234@movies-trailer.ohcumnp.mongodb.net/movies-trailer?retryWrites=true&w=majority`)
        console.log('Connect successful')
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = {connect}
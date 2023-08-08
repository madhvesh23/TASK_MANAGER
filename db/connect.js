var mongooes = require('mongoose')

var connectDB = (url) => {
    return mongooes.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })

}

module.exports = connectDB
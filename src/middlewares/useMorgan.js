const morgan = require('morgan')


module.exports = function (app) {
    const format = process.env.NODE_ENV === 'production' ? 'combined' : 'dev'

    // Status code 400 & 500

    app.use(morgan(format, {
        skip: (req, res) => res.statusCode < 400,
        stream: process.stderr
    }))


    // Status code 200 & 300
    app.use(morgan(format, {
        skip: (req, res) => res.statusCode >= 400,
        stream: process.stdout
    }))
}
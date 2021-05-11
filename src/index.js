require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const { useMorgan } = require('./middlewares')


const app = express()
app.use(cors())
useMorgan(app)

app.use(express.static(path.join(__dirname, '../', 'public')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected.'))
    .catch(err => console.log(err))


app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Welcome to our application!' })
})

app.use((req, res, next) => {
    const error = new Error('404 Page Not Found!')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    if (error.status === 404) {
        return res.status(404).json({
            message: error.message,
            status: 404
        })
    }

    return res.status(500).json({
        message: 'Internal Server Error!',
        status: 500
    })
})


app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to our application!' })
})

app.get('*', (req, res) => {
    res.status(200).json({ message: '404 not found!' })
})

app.listen(8080, () => {
    console.log('Server listening on port 8080')
})
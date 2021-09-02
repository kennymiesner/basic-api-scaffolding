// This allows us to stash 'artificial env variables' in a file
require('dotenv').config() 

const express = require('express')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())

const PORT = process.env.PORT || 5000 // Fallback is nice

server.get('/', (req, res) => {
  res.send(`<h1>Basic API Scaffolding</h1>`)
})

server.get('/api', (req, res) => {
  res.json({
    message: 'Basic GET Request'
  })
})

server.listen(PORT, () => {
  console.log(`\n*** Server Running on https://localhost:${PORT} ***\n`)
})
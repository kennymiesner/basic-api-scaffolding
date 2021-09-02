// This allows us to stash 'artificial env variables' in a file
require('dotenv').config() 
const path = require('path')
const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 5000 // Fallback is nice

const server = express()

server.use(express.json())
server.use(cors())
server.use(express.static(path.join(__dirname, 'client/build')))

server.get('/api', (req, res) => {
  res.json({
    message: 'Basic GET Request'
  })
})

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

server.listen(PORT, () => {
  console.log(`\n*** Server Running on https://localhost:${PORT} ***\n`)
})
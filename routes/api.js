const express = require('express')
const router = express.Router()
const db = require('../database')

router.get('/all-todos', (req,res) => {
    db.any('SELECT * FROM todos;')
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.send(err.message)
    })
})

module.exports = router
const express = require('express')
const router = express.Router()
const db = require('../database')

router.get('/', (req,res) => {
    db.any('SELECT * FROM todos ORDER BY id DESC')
    .then(data => {
        // console.log(data)
        res.render('index', {
            todos: data
        })
    })
    .catch(err => {
        res.send(err)
    })
})

router.post('/newtodo', (req,res) => {
    db.none('INSERT INTO todos(content) VALUES ($1)', req.body.content)
    .then(() => {
        // console.log(req.body)
        res.send(req.body)
        // res.redirect('/')
    })
    .catch((err) => {
        res.send(err)
    })
})

module.exports = router;
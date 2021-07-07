const express = require('express')
const app = express()
const morgan = require('morgan')

// require routes
const homeRouter = require('./routes/index')
const apiRouter = require('./routes/api')

const PORT = process.env.PORT || 3000

// view engine config
app.set('view engine', 'ejs')

// body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static folder config
app.use(express.static('public'))

// morgan config
app.set(morgan('dev'))


// mount routers
app.use('/', homeRouter)
app.use('/api', apiRouter)

app.listen(PORT, () => {
    console.log(`Great job! Your app is listening at http://localhost:3000`)
})